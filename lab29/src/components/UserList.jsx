import './UserList.css';

function UserList({ users }) {
  return (
    <div className="user-list">
      <h3 className="user-list-title">👥 Users Online ({users.length})</h3>
      <div className="users-container">
        {users.length === 0 ? (
          <p className="no-users">No users connected</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="user-item">
              <span className="user-status-dot"></span>
              <span className="user-name">{user.username}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserList;
