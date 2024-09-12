import Post from '../posts/post/post'
import Box from '@mui/material/Box';

const Posts =() => {
    return(
        <Box 
        display="flex"
        alignItems="center"
        flexDirection="column"
        padding={2}
    >
        <h1>POSTS</h1>
        <Post />
        <Post />
    </Box>
    );
}
export default Posts;