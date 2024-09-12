import React from "react";
import Posts from './components/posts/posts';
import Form from './components/form/form';
import FriendVerse from './images/FriendVerse.png';
import {Box, Container, AppBar, Typography, Grow} from '@mui/material';
import { styles } from './styles'; // Import styles
const App = () => {
    return( 
        <Container maxWidth="lg">
        <AppBar sx={styles.appBar} position="static" color="inherit">
          <Typography sx={styles.heading} variant="h2" align="center">
            FriendsVerse
          </Typography>
          <Box 
  component="img" 
  src={FriendVerse} 
  alt="Friendsverse" 
  sx={{
    width: '13%',      
    height: 'auto',     
    display: 'block',  
    margin: '0 auto'     
  }} 
/>
        </AppBar>
        <Grow in>
          <Container>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }, // Responsive layout
                justifyContent: 'space-between',
                alignItems: 'stretch',
                gap: 3, // Gap between elements
              }}
            >
              <Box sx={{ flex: 7 }}>
                <Posts />
              </Box>
              <Box sx={{ flex: 4 }}>
                <Form />
              </Box>
            </Box>
          </Container>
        </Grow>
      </Container>);
}

export default App;