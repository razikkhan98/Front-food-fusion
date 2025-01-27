// Fetching Data (GET Request)

import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi"; // Import the custom hook

const UsersList = () => {
  const { request, loading, error } = useApi();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await request("GET", "/users");
      if (response) setUsers(response);
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
