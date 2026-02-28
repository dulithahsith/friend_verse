import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    padding: theme.spacing(1, 3),
  },
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 2),
  },
  avatar: {
    margin: "10px auto", // centers the avatar horizontally
    backgroundColor: "rgba(0, 183, 255, 1)", // bright blue
    width: 60, // size of avatar
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "rgba(0,183,255, 1)",
    },
    "&:visited": {
      color: "rgba(0,183,255, 1)",
    },
  },
  subHeading: {
    align: "center",
  },
  authButton: {
    marginLeft: theme.spacing(2), // adds space from left
  },
  image: {
    border: "3px solid black",
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "10px",
    width: 64,
    height: "auto",
    display: "block",
    margin: 0,
  },
  googleButton: {
    marginTop: "4px",
  },
  submit: {
    marginTop: "4px",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
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
