import { Box, Typography, Button, TextField } from '@mui/material';

const Form = () => {
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
        FORM
      </Typography>
      <Box
        component="form"
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
          label="Field 1"
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          variant="outlined"
          margin="normal"
          fullWidth
          label="Field 2"
          sx={{ marginBottom: 2 }}
        />
        <Button 
          variant="contained"
          color="primary"
          sx={{ marginBottom: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;