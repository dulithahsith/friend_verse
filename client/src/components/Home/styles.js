import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
  pagination: {
    borderRadius: 4,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  gridContainer: {
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  searchbutton: {
    marginTop: theme.spacing(1),
  },
}));
