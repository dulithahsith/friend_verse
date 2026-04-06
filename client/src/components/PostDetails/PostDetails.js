import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Box,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import { getPost } from "../../actions/posts";
import useStyles from "./../../styles";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  console.log("POST DETAILS");
  if (!post) return null;
  if (isLoading) {
    return (
      <Paper elevation={6}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <Box
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Box style={{ flex: "1 1 420px", minWidth: 0 }}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Comments - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </Box>
        {post.selectedFile && (
          <Box style={{ flex: "1 1 320px", maxWidth: "480px", width: "100%" }}>
            <img
              src={post.selectedFile}
              alt={post.title}
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                borderRadius: "12px",
                display: "block",
              }}
            />
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default PostDetails;
