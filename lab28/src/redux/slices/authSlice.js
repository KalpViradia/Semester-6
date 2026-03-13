import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = {
        id: Math.random().toString(36).substr(2, 9),
        email: action.payload.email,
        name: action.payload.email.split('@')[0],
        loginTime: new Date().toLocaleTimeString()
      };
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    }
  }
});

export const { loginStart, loginSuccess, logout } = authSlice.actions;

export const login = (email) => (dispatch) => {
  dispatch(loginStart());
  setTimeout(() => {
    dispatch(loginSuccess({ email }));
  }, 1000);
};

export default authSlice.reducer;
