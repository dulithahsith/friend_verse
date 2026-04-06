import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 24,
    marginBottom: theme.spacing(2.5),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    padding: theme.spacing(2.5),
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.92))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
  },
  pagination: {
    borderRadius: 24,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.92))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.06)",
  },
  gridContainer: {
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  searchbutton: {
    marginTop: theme.spacing(1),
    borderRadius: 16,
    minHeight: 48,
    textTransform: "none",
    fontWeight: 700,
    boxShadow: "0 16px 32px rgba(37, 99, 235, 0.18)",
  },
}));
