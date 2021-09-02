import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
    contentBox: {
      height: "80vh",
      width: "100%",
      background: "rgb(80,192,165)",
      display: "flex",
      justifyContent: "space-between",
    },
    textBox: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(6),
      color: "white",
    },
    imageBox: {
      marginTop: theme.spacing(30),
    },
  })
);

export default styles;
