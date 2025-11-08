import { useState, useEffect } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")) || []);
  }, []);

  const handleDelete = (id) => {
    const updated = users.filter(u => u.id !== id);
    localStorage.setItem("users", JSON.stringify(updated));
    setUsers(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">User Management</h2>
      <table className="w-full border text-center">
        <thead className="bg-gray-200">
          <tr><th>ID</th><th>Name</th><th>Role</th><th>Action</th></tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td><td>{u.username}</td><td>{u.role}</td>
                <td>
                  <button onClick={() => handleDelete(u.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="4">No users found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;