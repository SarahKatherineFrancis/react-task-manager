import { useState, useCallback } from "react";

// Define a custom hook named 'useHttp'.
const useHttp = () => {
  // Initialize state variables 'isLoading' and 'error' using the 'useState' hook.
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define a function 'sendRequest' using the 'useCallback' hook.
  // This function handles sending HTTP requests and managing loading and error states.
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    // Set 'isLoading' to 'true' to indicate that a request is in progress.
    setIsLoading(true);
    // Clear any previous error messages.
    setError(null);

    try {
      // Send an HTTP request using the 'fetch' API with the provided 'requestConfig'.
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      // Check if the response status code is not okay (e.g., 404, 500).
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      // Parse the response data as JSON.
      const data = await response.json();
      // Apply the retrieved data by calling the 'applyData' callback function.
      applyData(data);
    } catch (err) {
      // If an error occurs during the request or data processing, set the 'error' state with an error message.
      setError(err.message || "Something went wrong!");
    }

    // Set 'isLoading' back to 'false' to indicate that the request is complete.
    setIsLoading(false);
  }, []);

  // Return an object with the 'isLoading', 'error', and 'sendRequest' functions.
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
