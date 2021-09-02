import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
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
      marginTop: theme.spacing(25),
    },
  })
);

export default styles;
