import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      background: "rgb(255,227,128)",
    },
    contentBox: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    textBox: {
      color: "rgb(123,118,109)",
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(6),
    },
    imageBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      marginTop: theme.spacing(5),
      marginRight: theme.spacing(5),
    },
  })
);

export default styles;
