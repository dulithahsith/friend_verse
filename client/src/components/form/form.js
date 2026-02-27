import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: " ",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null,
  );
  const isEditing = Boolean(currentId && post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: " ",
      selectedFile: "",
    });
  };
  return (
    <Box
      style={{
        padding: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" style={{ marginBottom: 16 }}>
        {isEditing ? "Editing a Memory" : "Creating a Memory"}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="creator"
          label="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          style={{ marginBottom: 16 }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="Title"
          label="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
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
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: 16 }}
          type="submit"
        >
          Submit
        </Button>
        <Button variant="contained" color="secondary" onClick={clear}>
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
