import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: "url(/images/intro_web/intro1_crop_dark.png)",
      height: "100vh",
      display: "flex",
      alignItems: "center",
    },
    titleBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
    buttonBox: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(6),
      "& button:first-child": {
        marginRight: theme.spacing(10),
      },
    },
    guestLoginBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      marginTop: theme.spacing(6),
      background: "rgba(255,255,255,0.35)",
      borderRadius: 20,
      width: "70vw",
      height: "30vh",
      color: "white",
      marginBottom: theme.spacing(10),
      "& $guestButtonBox": {
        marginTop: theme.spacing(2),
        "& button + button": {
          marginLeft: theme.spacing(5),
        },
      },
    },
    guestButtonBox: {},
    defaultButton: {
      fontSize: "1rem",
      opacity: "0.9",
      background: "rgba(255,255,255,0.3)",
      borderRadius: 20,
    },
    containedButton: {
      fontSize: "1rem",
      background: "rgb(111,110,255)",
      borderRadius: 20,
      color: "white",
    },
  })
);

export default styles;
