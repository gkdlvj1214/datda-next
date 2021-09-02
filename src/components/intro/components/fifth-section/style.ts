import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      background: "rgb(229,245,250)",
    },
    contentBox: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    textBox: {
      background: "rgb(229,229,229)",
      border: "3px solid white",
      width: "50vw",
      height: "50vh",
      padding: theme.spacing(5, 0, 0, 3),
      borderRadius: 10,
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(6),
    },
    imageBox: {
      marginTop: theme.spacing(15),
    },
  })
);

export default styles;
