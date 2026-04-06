import React, { useEffect, useState } from "react";
import {
  Grow,
  Container,
  Paper,
  AppBar,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import Form from "../form/form";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Posts from "../posts/posts";
import Paginate from "../pagination";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const tagsFromUrl = query.get("tags");

  const hasSearchQuery = searchQuery && searchQuery !== "none";
  const hasTags = tagsFromUrl && tagsFromUrl.trim() !== "";

  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(","), page: 1 }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}&page=1`,
      );
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    if (hasSearchQuery || hasTags) {
      dispatch(
        getPostsBySearch({
          search: hasSearchQuery ? searchQuery : "",
          tags: hasTags ? tagsFromUrl : "",
          page,
        }),
      );
    } else {
      dispatch(getPosts(page));
    }
  }, [dispatch, page, searchQuery, tagsFromUrl]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  const handleAdd = (tag) => setTags([...tags, tag]);
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} md={8} lg={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.pagination} elevation={6}>
              <Paginate page={page} />
            </Paper>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              ></ChipInput>
              <Button
                onClick={searchPost}
                className={classes.searchbutton}
                color="primary"
                variant="contained"
                fullWidth
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
