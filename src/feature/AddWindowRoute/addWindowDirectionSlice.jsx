import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/components/api";

export const fetchDirections = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const json = await api.get("/users/1");

    return json.data;
  }
);

export const addUser = createAsyncThunk("users/addUser", async () => {
  try {
    await api.post("/user");
  } catch (e) {
    return "error";
  }
});

const addWindowDirectionSlice = createSlice({
  name: "todos",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },

  reducers: {
    addTodos: (state, action) => {
      state.items.push({
        id: 1,
        text: action.payload,
      });
    },
  },

  extraReducers: {
    [fetchDirections.pending]: (state) => {
      state.loading = true;
    },

    [fetchDirections.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
  },
});

export default addWindowDirectionSlice.reducer;

export const { addTodos } = addWindowDirectionSlice.actions;
