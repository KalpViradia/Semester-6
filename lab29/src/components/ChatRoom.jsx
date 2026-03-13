import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './ChatRoom.css';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';
import RoomSelector from './RoomSelector';

function ChatRoom() {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [currentRoom, setCurrentRoom] = useState('general');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const newSocket = io('http://localhost:3000', {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    newSocket.on('connect', () => {
      console.log('Connected to server');
      setIsConnected(true);
    });

    newSocket.on('receive-message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    newSocket.on('message-history', (history) => {
      setMessages(history);
    });

    newSocket.on('users-list', (usersList) => {
      setUsers(usersList);
    });

    newSocket.on('users-updated', (usersList) => {
      setUsers(usersList);
    });

    newSocket.on('user-joined', (data) => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          username: 'System',
          text: data.message,
          timestamp: data.timestamp,
          isSystem: true,
        },
      ]);
    });

    newSocket.on('user-left', (data) => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          username: 'System',
          text: data.message,
          timestamp: data.timestamp,
          isSystem: true,
        },
      ]);
    });

    newSocket.on('user-typing', () => {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    });

    newSocket.on('rooms-list', (roomsList) => {
      setRooms(roomsList);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
      setIsConnected(false);
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const handleJoin = (enteredUsername) => {
    if (enteredUsername.trim()) {
      setUsername(enteredUsername);
      socket.emit('join', enteredUsername, currentRoom);
      setIsJoined(true);
      setMessages([]);
    }
  };

  const handleRoomChange = (newRoom) => {
    if (socket && isJoined) {
      setCurrentRoom(newRoom);
      setMessages([]);
      socket.emit('join', username, newRoom);
    }
  };

  const handleSendMessage = (text) => {
    if (socket && text.trim()) {
      socket.emit('send-message', { text });
    }
  };

  const handleTyping = (isTypingNow) => {
    if (socket) {
      socket.emit('typing', { isTyping: isTypingNow });
    }
  };

  if (!isJoined) {
    return <JoinForm onJoin={handleJoin} isConnected={isConnected} />;
  }

  return (
    <div className="chat-room">
      <div className="chat-header">
        <h1>💬 Chat Application</h1>
        <div className="header-info">
          <span className="status-indicator" style={{ backgroundColor: isConnected ? '#4CAF50' : '#f44336' }}></span>
          <span className="username">{username}</span>
          <span className="room-badge">{currentRoom}</span>
        </div>
      </div>

      <div className="chat-container">
        <div className="messages-section">
          <RoomSelector
            currentRoom={currentRoom}
            onRoomChange={handleRoomChange}
            rooms={rooms}
          />
          <MessageList messages={messages} isTyping={isTyping} />
          <MessageInput onSendMessage={handleSendMessage} onTyping={handleTyping} />
        </div>

        <div className="sidebar">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

function JoinForm({ onJoin, isConnected }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onJoin(username);
  };

  return (
    <div className="join-form-container">
      <div className="join-form">
        <h1>Welcome to Chat</h1>
        {!isConnected && <p className="error">Connecting to server...</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={!isConnected}
            autoFocus
          />
          <button type="submit" disabled={!isConnected || !username.trim()}>
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;
