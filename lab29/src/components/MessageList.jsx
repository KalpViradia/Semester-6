import { useEffect, useRef } from 'react';
import './MessageList.css';

function MessageList({ messages, isTyping }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="empty-state">
          <p>No messages yet. Start the conversation!</p>
        </div>
      ) : (
        messages.map((message) => (
          <div key={message.id} className={`message ${message.isSystem ? 'system' : ''}`}>
            <div className="message-header">
              <span className="message-username">{message.username}</span>
              <span className="message-time">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </div>
            <div className="message-text">{message.text}</div>
          </div>
        ))
      )}
      {isTyping && <div className="typing-indicator">Someone is typing...</div>}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
