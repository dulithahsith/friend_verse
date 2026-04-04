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

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const isCreator = user?.result?._id === post?.creator;

  const Likes = () => {
    const likes = post?.likes || [];
    if (likes.length > 0) {
      return likes.find((like) => like === user?.result?._id) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };
  return (
    <Card
      className={classes.card}
      raised
      elevation={6}
      style={{ position: "relative" }}
    >
      {post.selectedFile && (
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
      )}
      <div>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div style={{ position: "absolute", top: 8, right: 8 }}>
        <Button
          style={{ color: "black" }}
          size="small"
          disabled={!isCreator}
          onClick={() => {
            if (isCreator) {
              setCurrentId(post._id);
            }
          }}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: "auto" }}>
        <Button
          color="primary"
          size="small"
          disabled={!user?.result}
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <Likes />
        </Button>
        {isCreator && (
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
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
