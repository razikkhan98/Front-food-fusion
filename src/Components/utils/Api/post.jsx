// Sending Data (POST Request)

import React, { useState } from "react";
import useApi from "../hooks/useApi"; // Import the custom hook

const CreateUser = () => {
  const { request, loading, error } = useApi();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await request("POST", "/users", { name });

    if (response) {
      alert("User created successfully!");
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create User"}
      </button>
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default CreateUser;
