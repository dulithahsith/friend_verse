import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import Post from "../posts/post/post";

const Posts = () => {
  const posts = useSelector((state) => state.posts); // Access posts from Redux state
  console.log(posts);

  if (!posts.length) return <h2>Loading...</h2>;

  return (
    <Box display="flex" alignItems="center" flexDirection="column" padding={2}>
      <h1>POSTS</h1>
      {posts.map((post) => (
        <Post key={post._id || post.id} post={post} />
      ))}
    </Box>
  );
};

export default Posts;
