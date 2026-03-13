import './RoomSelector.css';

function RoomSelector({ currentRoom, onRoomChange, rooms }) {
  const defaultRooms = ['general', 'random', 'tech', 'off-topic'];
  const allRooms = [...new Set([...defaultRooms, ...rooms.map(r => r.name)])];

  return (
    <div className="room-selector">
      <h3 className="room-title">🏠 Rooms</h3>
      <div className="rooms-list">
        {allRooms.map((room) => (
          <button
            key={room}
            className={`room-button ${currentRoom === room ? 'active' : ''}`}
            onClick={() => onRoomChange(room)}
          >
            <span className="room-icon">#</span>
            <span className="room-name">{room}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoomSelector;
