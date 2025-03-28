import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://1228-106-222-217-121.ngrok-free.app"; // Change this to your API

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (method, endpoint, data = null, params = null) => {
    console.log('method: ', method);
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        method,
        url: `${BASE_URL}${endpoint}`,
        data,
        params,
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });

      return response.data; // Return API response data
    } catch (err) {
      setError(err.response?.data || "Something went wrong!");
      console.error("API Error:", err);
      return null; // Return null on error
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};

export default useApi;









