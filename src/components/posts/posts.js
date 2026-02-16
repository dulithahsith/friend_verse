import React from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress, Grid } from "@material-ui/core";
import Post from "../posts/post/post";
import useStyles from "./../../styles";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts); // Access posts from Redux state
  console.log(posts);

  if (!posts.length) return <CircularProgress />;

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={2}
    >
      {posts.map((post) => (
        <Grid key={post._id || post.id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
