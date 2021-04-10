import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/components/api";

export const addUser = createAsyncThunk("user/addUser", async (getState) => {
  const { email, password } = getState().users;
  try {
    await api.post("/users", {
      email,
      password,
    });
  } catch (e) {
    return "error";
  }
});

const registrationSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },

  extraReducers: {
    [addUser.pending]: (state) => {
      state.loading = true;
    },

    [addUser.fulfilled]: (state, action) => {
      state.users = state.users.push(action.payload);
      state.loading = false;
    },
  },
});

export default registrationSlice.reducer;

export const { addUsers } = registrationSlice.actions;
