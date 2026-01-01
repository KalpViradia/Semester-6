export default function Users() {
  const users = [
    { id: 1, name: "User1", email: "user1@example.com", role: "User" },
    { id: 2, name: "User2", email: "User2@example.com", role: "User" },
    { id: 3, name: "Admin", email: "admin@example.com", role: "Admin" },
  ];

  return (
    <div>
      <h1 className="mb-4">Users List</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
