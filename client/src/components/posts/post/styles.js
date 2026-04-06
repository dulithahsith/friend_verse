import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 26,
    height: "100%",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.97), rgba(248,250,252,0.95))",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 22px 44px rgba(15, 23, 42, 0.08)",
    transition: "transform 180ms ease, box-shadow 180ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 28px 54px rgba(15, 23, 42, 0.12)",
    },
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "62%",
    backgroundColor: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardHeader: {
    padding: theme.spacing(2.5, 2.5, 1.25),
    display: "grid",
    gap: theme.spacing(0.75),
  },
  author: {
    fontWeight: 700,
    color: "#0f172a",
  },
  timestamp: {
    color: "#64748b",
  },
  editButton: {
    color: "#0f172a",
    backgroundColor: "rgba(255,255,255,0.78)",
    borderRadius: 14,
    padding: theme.spacing(0.5),
  },
  tags: {
    padding: theme.spacing(0, 2.5),
    color: "#2563eb",
    fontWeight: 600,
    letterSpacing: "0.01em",
  },
  content: {
    padding: theme.spacing(1.5, 2.5, 2),
  },
  message: {
    color: "#334155",
    lineHeight: 1.7,
  },
  actionsRow: {
    marginTop: "auto",
    padding: theme.spacing(1.25, 1.5, 1.5),
    borderTop: "1px solid rgba(226, 232, 240, 0.9)",
  },
  actionButton: {
    borderRadius: 999,
    padding: theme.spacing(0.75, 1.5),
    textTransform: "none",
    fontWeight: 700,
  },
}));
