import { Box, TextField } from "@material-ui/core";
import useStyles from "./style";
import Router from "next/router";

export default function Login() {
  const classes = useStyles();

  const onClickMovetoHome = () => {
    Router.push("/");
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.loginWrapper}>
        <Box className={classes.imageBox} onClick={onClickMovetoHome}>
          <img src="/images/datda_symbol_text_main.png" />
        </Box>
        <Box className={classes.inputBox}>
          <div>
            <TextField type="text" placeholder="이메일" />
          </div>
          <div>
            <TextField type="password" placeholder="비밀번호" />
          </div>
        </Box>
      </Box>
    </Box>
  );
}
