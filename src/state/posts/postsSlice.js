import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
  filteredValue: [],
  //use to block buttons when creating or deleting data
  isLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filteredValue = action.payload;
    },
  },
  //async reducers
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.value.push(action.payload);
        state.filteredValue = state.value;
        state.isLoading = false;
      })
      .addCase(create.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(get.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(get.fulfilled, (state, action) => {
        state.value = action.payload;
        state.filteredValue = action.payload;
        state.isLoading = false;
      })
      .addCase(get.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(destroy.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(destroy.fulfilled, (state, action) => {
        const newPosts = state.value.filter(
          (post) => post.id !== action.payload.id
        );
        state.value = newPosts;
        state.filteredValue = newPosts;
        state.isLoading = false;
      })
      .addCase(destroy.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

//async methods
export const create = createAsyncThunk("posts/create", async (post) => {
  const posts = await axios.post("http://localhost:8080/posts", post);
  return posts.data;
});

export const get = createAsyncThunk("posts/get", async () => {
  const posts = await axios.get("http://localhost:8080/posts");
  return posts.data;
});

export const destroy = createAsyncThunk("posts/delete", async (postId) => {
  const posts = await axios.delete(`http://localhost:8080/posts/${postId}`);
  return posts.data;
});

export const { filter } = postsSlice.actions;

export default postsSlice.reducer;
