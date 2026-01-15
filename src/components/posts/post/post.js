import React from "react";

import { Box, Typography } from "@material-ui/core";

const Post = ({ post }) => (
  <Box style={{ margin: "20px", color: "blue" }}>
    <Typography variant="h6">{post.title}</Typography>
    <Typography>{post.message}</Typography>
  </Box>
);

export default Post;
