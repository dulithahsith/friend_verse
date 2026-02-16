import * as api from "../api";
import {
  fetchAll,
  create,
  likePost as likePostAction,
  updatePost as updatePostAction,
  deletePost as deletePostAction,
} from "../reducers/posts";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(fetchAll(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(create(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch(likePostAction(data));
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id);
    dispatch(updatePostAction(data));
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch(deletePostAction(id));
  } catch (error) {
    console.log(error.message);
  }
};
