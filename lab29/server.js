import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
  },
});

app.use(express.static(join(__dirname, 'dist')));

// Store connected users
const users = new Map();
const rooms = new Map();

// Initialize default room
rooms.set('general', { name: 'General', messages: [] });

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // User joins the chat
  socket.on('join', (username, room = 'general') => {
    socket.join(room);
    
    const user = {
      id: socket.id,
      username: username,
      room: room,
      joinedAt: new Date(),
    };
    
    users.set(socket.id, user);
    
    // Notify others that user joined
    socket.broadcast.to(room).emit('user-joined', {
      username: username,
      message: `${username} has joined the chat`,
      timestamp: new Date(),
    });
    
    // Send all users in room to this user
    const roomUsers = Array.from(users.values()).filter(u => u.room === room);
    socket.emit('users-list', roomUsers);
    
    // Send existing messages to the user
    if (rooms.has(room)) {
      socket.emit('message-history', rooms.get(room).messages);
    }
    
    // Notify all users about updated user list
    io.to(room).emit('users-updated', roomUsers);
    
    console.log(`${username} joined ${room}`);
  });

  // User sends a message
  socket.on('send-message', (data) => {
    const user = users.get(socket.id);
    if (!user) return;

    const message = {
      id: Date.now(),
      username: user.username,
      text: data.text,
      room: user.room,
      timestamp: new Date(),
      userId: socket.id,
    };

    // Store message in room history
    if (!rooms.has(user.room)) {
      rooms.set(user.room, { name: user.room, messages: [] });
    }
    rooms.get(user.room).messages.push(message);

    // Emit to all users in the room
    io.to(user.room).emit('receive-message', message);
    console.log(`[${user.room}] ${user.username}: ${data.text}`);
  });

  // User types indicator
  socket.on('typing', (data) => {
    const user = users.get(socket.id);
    if (!user) return;
    
    socket.broadcast.to(user.room).emit('user-typing', {
      username: user.username,
      isTyping: data.isTyping,
    });
  });

  // User disconnects
  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      io.to(user.room).emit('user-left', {
        username: user.username,
        message: `${user.username} has left the chat`,
        timestamp: new Date(),
      });

      users.delete(socket.id);

      // Update user list
      const roomUsers = Array.from(users.values()).filter(u => u.room === user.room);
      io.to(user.room).emit('users-updated', roomUsers);

      console.log(`${user.username} disconnected`);
    }
  });

  // Get available rooms
  socket.on('get-rooms', () => {
    const roomsList = Array.from(rooms.values()).map(room => ({
      name: room.name,
      users: Array.from(users.values()).filter(u => u.room === room.name).length,
    }));
    socket.emit('rooms-list', roomsList);
  });
});

const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`Socket.io server running on http://localhost:${PORT}`);
});
