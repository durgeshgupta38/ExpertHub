// import { store } from "../../Redux/Store/store";
// import { logoutUser } from "../../Redux/Slices/userSlice"; // Logout action

const BASE_URL = "https://d-main-power.onrender.com/api/v1/";

export const apiRequest = async (endpoint, method = "GET", body = null, headers = {}, isFormData = false, requiresAuth = true) => { //4th

  try {
    let accessToken = localStorage.getItem("accessToken");

    // Set headers dynamically
    const defaultHeaders = {
      ...(isFormData ? {} : { "Content-Type": "application/json" }), // Don't set Content-Type for FormData
      ...(requiresAuth && accessToken ? { Authorization: `Bearer ${accessToken}` } : {}), // Attach token only if required
      ...headers,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: defaultHeaders,
      body: body ? (isFormData ? body : JSON.stringify(body)) : null,
      credentials: "omit", // Ensures HTTP-only cookies (for refresh token) are sent
    });

    // If response is 401 (Unauthorized), attempt to refresh token
    if (response.status === 401 && requiresAuth) {
      accessToken = await refreshAccessToken();
      if (accessToken) {
        return apiRequest(endpoint, method, body, headers, isFormData, requiresAuth); // Retry request with new token
      } else {
          // Lazy Import store & logoutUser to prevent circular dependency
          const { store } = await import("../../Redux/Store/store");
          const { logoutUser } = await import("../../Redux/Slices/userSlice");
  
        store.dispatch(logoutUser()); // Log out user if refresh fails
        return Promise.reject("Session expired. Please log in again.");
      }
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return response.json();
  } catch (error) {
    console.error("API Request Error:", error.message);
    throw error;
  }
};

// Function to refresh access token
export const refreshAccessToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}users/refresh-token`, {
      method: "POST",
      credentials: "include", // Required for HTTP-only cookie handling
    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("accessToken", data.accessToken);
      return data.accessToken;
    }
  } catch (error) {
    console.error("Failed to refresh token:", error);
    return null;
  }
};


// import { store } from "../../Redux/Store/store";
// const BASE_URL = "https://d-main-power.onrender.com/api/v1/";

// export const apiRequest = async (endpoint, method = "GET", body = null, headers = {}) => {
//   try {
//     let accessToken = localStorage.getItem("accessToken");

//     const response = await fetch(`${BASE_URL}${endpoint}`, {
//       method,
//       headers: {
//         "Content-Type": "application/json",
//         ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
//         ...headers,
//       },
//       body: body ? JSON.stringify(body) : null,
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Something went wrong");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("API Request Error:", error.message);
//     throw error;
//   }
// };

// export const refreshAccessToken = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}users/refresh-token`, {
//       method: "POST",
//       credentials: "include", // Required to send HTTP-only cookies
//     });

//     const data = await response.json();
//     if (data.success) {
//       localStorage.setItem("accessToken", data.accessToken);
//       return data.accessToken;
//     }
//   } catch (error) {
//     console.error("Failed to refresh token:", error);
//     return null;
//   }
// };
