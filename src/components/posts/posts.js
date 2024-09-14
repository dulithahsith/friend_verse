import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Post from '../posts/post/post';

const Posts = () => {
  const posts = useSelector((state) => state.posts); // Access posts from Redux state
  console.log(posts);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      padding={2}
    >
         <h1>POSTS</h1>
        <Post />
        <Post />
     
    </Box>
  );
};

export default Posts;
