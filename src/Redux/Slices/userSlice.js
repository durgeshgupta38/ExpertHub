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


const initialState = {
  user: null,
  isLoggedIn:!!localStorage.getItem("accessToken"),
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
        localStorage.setItem("isAuthenticated",true);
        // localStorage.setItem("user", JSON.stringify(action.payload));
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
        state.isLoggedIn=true;
        // state.isAuthenticated = true;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem("roles",action.payload.user.role);
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
        state.isLoggedIn=false;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("roles");

        state.loading = false;
    })
    .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })

  },
});

// export const { } = userSlice.actions;
export default userSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { apiRequest } from "../../ApiServices/CommonApi/api";
// // Async Thunk for Signup
// export const signUpUser = createAsyncThunk("user/signUpUser", async (userData, { rejectWithValue }) => {
//   try {
//     const response = await apiRequest("users/register", "POST", userData);
//     if (response.success) {
//       return response.data;
//     } else {
//       return rejectWithValue(response.message); // Return error message
//     }
//   } catch (error) {
//     return rejectWithValue(error.message); // Handle network errors
//   }
// });

// // Async Thunk for Login
// export const loginUser = createAsyncThunk("user/login", async (credentials, { rejectWithValue }) => {
 
//   try {

//     const response = await apiRequest("users/login", "POST", credentials
//     //   ,{
//     //   credentials: "include", // Required to send HTTP-only cookies
//     // }
//   );
//     if (response.success) {
//       return response.data;
//     } else {
//       return rejectWithValue(response.message);
//     }
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });


// const initialState = {
//   user: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
//   accessToken: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem("user");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signUpUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signUpUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//         localStorage.setItem("user", JSON.stringify(action.payload));
//       })
//       .addCase(signUpUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//         state.token = action.payload.accessToken;
//         localStorage.setItem("accessToken", JSON.stringify(action.payload.accessToken));
//         // localStorage.setItem("user", JSON.stringify(action.payload));
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logoutUser } = userSlice.actions;
// export default userSlice.reducer;
