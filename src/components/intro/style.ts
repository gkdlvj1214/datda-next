import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    bottomButtonBox: {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(3, 0),
      "& button + button": {
        marginLeft: theme.spacing(4),
      },
    },
    toTopBox: {
      position: "fixed",
      top: "79vh",
      left: "94vw",
      width: 50,
      "& img": {
        width: "100%",
      },
    },
  })
);

export default styles;
