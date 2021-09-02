import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      background: "rgb(229,229,229)",
    },
    contentBox: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    textBox: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(6),
    },
    imageBox: {
      marginTop: theme.spacing(30),
      width: 720,
      "& img": {
        width: "100%",
      },
    },
  })
);

export default styles;
