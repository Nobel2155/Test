import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  email: null,
  passengerData: {},
  itineraryData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.email = action.payload.email;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload.token); // Store token in localStorage
        localStorage.setItem("email", action.payload.email); // Store email in localStorage
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.email = null;
      state.passengerData = {}; // Clear passengerData on logout
      state.itineraryData = {};
      if (typeof window !== "undefined") {
        localStorage.removeItem("token"); // Remove token from localStorage
        localStorage.removeItem("email"); // Remove email from localStorage
      }
    },
    loadUserFromLocalStorage: (state) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        if (token && email) {
          state.isLoggedIn = true;
          state.token = token;
          state.email = email;
        }
      }
    },
    setPassengerData: (state, action) => {
      state.passengerData = action.payload;
    },
    setItineraryData: (state, action) => {
      state.itineraryData = action.payload;
    },
  },
});

export const {
  login,
  logout,
  loadUserFromLocalStorage,
  setPassengerData,
  setItineraryData,
} = authSlice.actions;

export default authSlice.reducer;
