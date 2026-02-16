import React from "react";
import moment from "moment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import { likePost, deletePost, updatePost } from "../../../actions/posts";
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./../../../styles";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card} style={{ position: "relative" }}>
      {post.selectedFile && (
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
      )}
      <div>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div style={{ position: "absolute", top: 8, right: 8 }}>
        <Button
          style={{ color: "black" }}
          size="small"
          onClick={() => {
            dispatch(updatePost(post._id));
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => "#${tag}")}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          size="small"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <ThumbUpAltIcon fontSize="small" />
          Like {post.likeCount}
        </Button>
        <Button
          color="primary"
          size="small"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
