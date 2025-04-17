import { useContext, useState } from "react";
import axios from "axios";
import { UseContext } from "../../Context/context";

const Auth = JSON?.parse(sessionStorage?.getItem("User") ?? "{}");

const BASE_URL =
  "https://f8ce-2401-4900-8823-2711-f808-2a6a-e038-c5d0.ngrok-free.app"; // Change this to your API

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { UserAuth } = useContext(UseContext);

  const request = async (method, endpoint, data = null, params = null) => {
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
          Authorization: `Bearer ${UserAuth?.accessToken || Auth?.accessToken}`,
          session: `${UserAuth?.session || Auth?.session}`,
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
