import { useState, useRef } from 'react';
import './MessageInput.css';

function MessageInput({ onSendMessage, onTyping }) {
  const [message, setMessage] = useState('');
  const typingTimeoutRef = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
    
    onTyping(true);
    
    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      onTyping(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      clearTimeout(typingTimeoutRef.current);
      onTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="message-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Type a message..."
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button type="submit" className="send-button" disabled={!message.trim()}>
        Send
      </button>
    </form>
  );
}

export default MessageInput;
