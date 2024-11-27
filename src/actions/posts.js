import * as api from '../api';
import { fetchAll,create } from '../reducers/posts';

export const getPosts = () => async (dispatch) => {
    try{
        const {data} = await api.fetchPosts();
        dispatch(fetchAll(data));
    } catch(error){
        console.log(error.message);
    }
}

export const createPost = (post) => async(dispatch) => {
    try{
        const {data} = await api.createPost(post);
        dispatch(create(data));
    }catch(error){
        console.log(error.message);
    }
}