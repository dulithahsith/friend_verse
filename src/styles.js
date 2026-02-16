import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    border: "3px solid black",
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "10px",
    width: "13%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
    flexDirection: "row",
  },
  posts: {
    flex: 7,
  },
  form: {
    flex: 4,
  },
  card: {
    borderRadius: 15,
    position: "relative",
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "cover",
  },
}));

export default useStyles;
