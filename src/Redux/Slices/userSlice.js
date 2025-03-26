import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../ApiServices/CommonApi/api";

// Async Thunk for Signup
export const signUpUser = createAsyncThunk("user/signUpUser", async (userData, { rejectWithValue }) => { //3rd

  try {
    const response = await apiRequest("users/register", "POST", userData, {}, false, false);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.message);
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Async Thunk for Login
export const loginUser = createAsyncThunk("user/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await apiRequest("users/login", "POST", credentials, {}, false, false);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.message);
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await apiRequest("users/logout", "POST", {}, {}, false, true);
    if (response.success) {
      return true;
    } else {
      return rejectWithValue(response.message);
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateProfilePic = createAsyncThunk(
  "user/updateProfilePic",
  async (imageFile, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("profile", imageFile); // Key should match backend API
      const response = await apiRequest("users/update-profile", "PATCH", formData, {}, true, true);
      return response; // Return updated user data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/current-user",
  async (_, { rejectWithValue}) => {
    try {
      const token = localStorage.getItem("accessToken");
      // Use the signal from Redux Toolkit to automatically handle cancellations
      const response = await apiRequest("users/current-user", "GET", null, {
        Authorization: `Bearer ${token}`,
        // Pass Redux Toolkit’s signal directly
      }, false, false,
        // signal // Pass the signal from Redux Toolkit
      );
      console.log(response.data, "response.dataresponse.data")
      return response.data;
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
        return rejectWithValue("Request was aborted");
      }
      return rejectWithValue(error.message || "Failed to fetch user details");
    }
  }
);
export const changePassword = createAsyncThunk("user/change-password", async (credentials, { rejectWithValue }) => {
  try {
    const response = await apiRequest("users/change-password", "POST", credentials, {}, false, true);
    if (response.success) {
      return response;
    } else {
      return rejectWithValue(response.message);
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const initialState = {
  user: null,
  isLoggedIn: localStorage.getItem("isLoggedIn") == true,
  role: localStorage.getItem("role") || null,
  // isLoggedIn: !!localStorage.getItem("isLoggedIn"),
  isAuthenticated: !!localStorage.getItem("accessToken"), // Check token presence
  loading: false,
  error: null,
  accessToken: localStorage.getItem("accessToken") || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => { //2nd
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => { //5th
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", true);
      })
      .addCase(signUpUser.rejected, (state, action) => { //or 5th 
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem("role", action.payload.user.role);
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("isLoggedIn", true);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.accessToken = null;
        state.isLoggedIn = false;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");
        state.loading = false;

      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfilePic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfilePic.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateProfilePic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        console.log(action,"yyyyyyyyyyy")
        state.loading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        console.log(action,"eeeeeeeerrrrrrrrrreeeeeeee")

        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { } = userSlice.actions;
export default userSlice.reducer;
