import React, { useEffect, useState } from "react";
import {
  Grow,
  Box,
  Container,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import Form from "../form/form";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Posts from "../posts/posts";
import useStyles from "../../styles";
import Paginate from "../pagination";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Grow in>
      <Container>
        <Box className={classes.content}>
          <Box className={classes.posts}>
            <Posts setCurrentId={setCurrentId} />
          </Box>
          <Box className={classes.form}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination} elevation={6}>
              <Paginate />
            </Paper>
          </Box>
        </Box>
      </Container>
    </Grow>
  );
};

export default Home;
