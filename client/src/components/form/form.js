import React, { useState, useEffect } from "react";
import { Paper, Box, Typography, Button, TextField } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";
import useStyles from "../../styles";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: " ",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null,
  );
  const isEditing = Boolean(currentId && post);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name }),
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.formPaper}>
        <Box className={classes.formPanel}>
          <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
          </Typography>
        </Box>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: " ",
      selectedFile: "",
    });
  };
  return (
    <Paper elevation={6} className={classes.formPaper}>
      <Box className={classes.formPanel}>
        <Typography variant="h4" className={classes.formTitle}>
          {isEditing ? "Editing a Memory" : "Creating a Memory"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "100%",
            margin: "auto",
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="Title"
            label="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            style={{ marginBottom: 16 }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="message"
            label="Message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            style={{ marginBottom: 16 }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="tags"
            label="Tags"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
            style={{ marginBottom: 16 }}
          />
          <FileBase
            key={postData.selectedFile ? "has-file" : "no-file"}
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <div className={classes.formActions}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={clear}>
              Clear
            </Button>
          </div>
        </Box>
      </Box>
    </Paper>
  );
};

export default Form;
