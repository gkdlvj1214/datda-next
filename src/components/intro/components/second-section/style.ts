import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      background: "rgb(220,255,187)",
    },
    contentBox: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    textBox: {
      color: "rgb(63,100,29)",
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(6),
    },
    imageBox: {
      marginTop: theme.spacing(25),
    },
  })
);

export default styles;
