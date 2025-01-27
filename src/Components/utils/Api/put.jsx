import React from "react";
import useApi from "../hooks/useApi"; // Import the custom hook

const Put = () => {
  const { request, loading, error } = useApi();


  // Example usage: Update a user with ID 1
  const updateUser = async (userId, newData) => {
    const response = await request("PUT", `/users/${userId}`, newData);
    if (response) console.log("User updated:", response);
  };



    // Example usage: Delete a user with ID 1
  const deleteUser = async (userId) => {
    const response = await request("DELETE", `/users/${userId}`);
    if (response) console.log("User deleted successfully");
  };

  return <></>;
};

export default Put;
