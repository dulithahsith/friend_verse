import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Paginate = ({ page }) => {
  const classes = useStyles();
  const { numberOfPages, currentPage } = useSelector((state) => state.posts);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("searchQuery");
  const tags = query.get("tags");

  const isSearchPage = Boolean(
    (searchQuery && searchQuery !== "none") || (tags && tags.trim() !== ""),
  );

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages || 1}
      page={Number(page || currentPage || 1)}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={
            isSearchPage
              ? `/posts/search?searchQuery=${searchQuery || "none"}&tags=${tags || ""}&page=${item.page}`
              : `/posts?page=${item.page}`
          }
        />
      )}
    />
  );
};
export default Paginate;
