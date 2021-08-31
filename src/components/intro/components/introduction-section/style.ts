import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      border: "1px solid",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    titleBox: {},
    buttonBox: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(6),
      "& button:first-child": {
        marginRight: theme.spacing(3),
      },
    },
    guestLoginBox: {
      textAlign: "center",
      marginTop: theme.spacing(3),
      background: "rgba(255,255,255,0.35)",
      borderRadius: 20,
      border: "1px solid",
      "& $guestButtonBox": {
        "& button + button": {
          marginLeft: theme.spacing(5),
        },
      },
    },
    guestButtonBox: {},
  })
);

export default styles;
