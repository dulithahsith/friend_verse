import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';

import {createPost} from '../../actions/posts';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags:' '
  })
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  }
  return (
    <Box 
      sx={{
        padding: 2, // Equivalent to theme.spacing(2)
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Creating a Memory
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '600px', // Adjust width as needed
          margin: 'auto',
        }}
        
      >
        <TextField 
          variant="outlined"
          margin="normal"
          fullWidth
          name="creator"
          label="Creator"
          value={postData.creator}
          onChange = {(e) => setPostData({...postData, creator: e.target.value})}
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          variant="outlined"
          margin="normal"
          fullWidth
          name="Title"
          label="title"
          value={postData.title}
          onChange = {(e) => setPostData({...postData, title: e.target.value})}
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          variant="outlined"
          margin="normal"
          fullWidth
          name="message"
          label="Message"
          value={postData.message}
          onChange = {(e) => setPostData({...postData, message: e.target.value})}
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          variant="outlined"
          margin="normal"
          fullWidth
          name="tags"
          label="Tags"
          value={postData.tags}
          onChange = {(e) => setPostData({...postData, tags: e.target.value})}
          sx={{ marginBottom: 2 }}
        />
        <FileBase
  type="file"
  multiple={false}
  onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
/>
        <Button 
          variant="contained"
          color="primary"
          sx={{ marginBottom: 2 }}
          type ="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;