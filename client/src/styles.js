import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 28,
    margin: "28px 0 32px",
    padding: theme.spacing(1.25, 3),
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.94), rgba(244,248,255,0.9))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 24px 55px rgba(15, 23, 42, 0.08)",
    backdropFilter: "blur(18px)",
  },
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0.5, 0.5),
    gap: theme.spacing(2.5),
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  avatar: {
    margin: "10px auto",
    background:
      "linear-gradient(135deg, rgba(14,165,233,1), rgba(37,99,235,1))",
    width: 60, // size of avatar
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 14px 30px rgba(37, 99, 235, 0.22)",
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
    color: "#0f172a",
    textDecoration: "none",
    fontWeight: 800,
    letterSpacing: "-0.04em",
    lineHeight: 1,
    "&:hover": {
      textDecoration: "none",
      color: "#1d4ed8",
    },
    "&:visited": {
      color: "#0f172a",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  subHeading: {
    align: "center",
  },
  authButton: {
    marginLeft: theme.spacing(2),
    borderRadius: 999,
    padding: theme.spacing(1, 2.5),
    boxShadow: "none",
    textTransform: "none",
    fontWeight: 700,
  },
  image: {
    padding: "10px",
    borderRadius: 18,
    width: 72,
    height: "auto",
    display: "block",
    margin: 0,
    background:
      "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(59,130,246,0.18))",
    boxShadow: "inset 0 0 0 1px rgba(59,130,246,0.1)",
  },
  googleButton: {
    marginTop: theme.spacing(1.5),
    borderRadius: 16,
    minHeight: 48,
    textTransform: "none",
    fontWeight: 700,
    boxShadow: "0 16px 30px rgba(37, 99, 235, 0.16)",
  },
  submit: {
    marginTop: theme.spacing(2),
    borderRadius: 16,
    minHeight: 48,
    textTransform: "none",
    fontWeight: 700,
    boxShadow: "0 16px 30px rgba(14, 165, 233, 0.18)",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(0.75, 1),
    borderRadius: 999,
    backgroundColor: "rgba(248, 250, 252, 0.9)",
    boxShadow: "inset 0 0 0 1px rgba(148, 163, 184, 0.18)",
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
  commentOuterContainer: {
    display: "flex",
    gap: theme.spacing(3),
    alignItems: "stretch",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  commentsInnerContainer: {
    flex: "1 1 55%",
    minWidth: 0,
  },
  commentsList: {
    maxHeight: "10.5em",
    overflowY: "auto",
    paddingRight: theme.spacing(1),
    border: "1px solid rgba(148, 163, 184, 0.22)",
    borderRadius: 18,
    padding: theme.spacing(1.75),
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
  },
  commentItem: {
    wordBreak: "break-word",
    paddingBottom: theme.spacing(1.25),
    borderBottom: "1px solid rgba(226, 232, 240, 0.9)",
    "&:last-child": {
      paddingBottom: 0,
      borderBottom: "none",
      marginBottom: 0,
    },
  },
  commentFormOuterContainer: {
    flex: "1 1 45%",
    minWidth: 0,
  },
  section: {
    borderRadius: 28,
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(241,245,249,0.84))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.06)",
  },
  recommendedPosts: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(3),
    marginTop: theme.spacing(2),
    alignItems: "flex-start",
  },
  posts: {
    flex: 7,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1.5),
  },
  card: {
    borderRadius: 15,
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "cover",
  },
  formPaper: {
    borderRadius: 28,
    overflow: "hidden",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.94))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.08)",
  },
  formPanel: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1.5),
  },
  formTitle: {
    fontWeight: 800,
    color: "#0f172a",
    letterSpacing: "-0.03em",
  },
  formActions: {
    display: "grid",
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(2),
  },
  authPaper: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(4),
    borderRadius: 30,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.97), rgba(244,247,251,0.94))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 26px 60px rgba(15, 23, 42, 0.1)",
  },
  authHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  authSwitch: {
    marginTop: theme.spacing(1),
    textTransform: "none",
    fontWeight: 700,
  },
  detailPaper: {
    padding: theme.spacing(3.5),
    borderRadius: 30,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.97), rgba(248,250,252,0.94))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 24px 55px rgba(15, 23, 42, 0.08)",
  },
  detailImage: {
    width: "100%",
    maxHeight: 500,
    objectFit: "cover",
    borderRadius: 20,
    display: "block",
    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.14)",
  },
  recommendedCard: {
    margin: 0,
    padding: theme.spacing(2),
    cursor: "pointer",
    borderRadius: 22,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.94))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.08)",
    transition: "transform 160ms ease, box-shadow 160ms ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 22px 40px rgba(15, 23, 42, 0.12)",
    },
  },
}));

export default useStyles;
