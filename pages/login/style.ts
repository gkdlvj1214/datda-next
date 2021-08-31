import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(20),
      "& $loginWrapper": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    loginWrapper: {},
    imageBox: {
      width: 150,
      pointer: "cursor",
      "& img": {
        width: "100%",
      },
    },
    inputBox: {
      width: 500,
      "& div:first-child": {
        marginTop: theme.spacing(2),
      },
      "& .MuiTextField-root": {
        width: "100%",
      },
    },
  })
);

export default styles;
