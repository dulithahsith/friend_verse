import React, { useEffect, useRef, useState } from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./../../styles";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const comments = post?.comments || [];
  const lastCommentRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;
    await dispatch(commentPost(finalComment, post._id));
    setComment("");
  };
  useEffect(() => {
    if (lastCommentRef.current) {
      lastCommentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [comments]);

  return (
    <div>
      <div className={classes.commentOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          <div className={classes.commentsList}>
            {comments.map((comment, index) => (
              <Typography
                key={index}
                gutterBottom
                variant="subtitle1"
                className={classes.commentItem}
                ref={index === comments.length - 1 ? lastCommentRef : null}
              >
                {comment}
              </Typography>
            ))}
          </div>
        </div>
        {user?.result?.name && (
          <div className={classes.commentFormOuterContainer}>
            <Typography gutterBottom variant="h6">
              Write a Comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              variant="contained"
              onClick={handleClick}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
