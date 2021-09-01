import { Box, Button } from "@material-ui/core";
import Router from "next/router";
import useStyles from "./style";
import FifthSection from "./components/fifth-section/FifthSection";
import FirstSection from "./components/first-section/FirstSection";
import FourthSection from "./components/fourth-section/FourthSection";
import IntroductionSection from "./components/introduction-section/IntroductionSection";
import SecondSection from "./components/second-section/SecondSection";
import SixthSection from "./components/sixth-section/SixthSection";
import ThirdSection from "./components/third-section/ThirdSection";

export default function Intro() {
  const classes = useStyles();

  const onClickMoveTop = () => {
    window.scrollTo(0, 0);
  };

  const onClickMovetoLogin = () => {
    Router.push("/login");
  };

  const onClickMovetoSignup = () => {
    Router.push("/signup");
  };

  return (
    <Box>
      <IntroductionSection
        onLogin={onClickMovetoLogin}
        onSignup={onClickMovetoSignup}
      />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Box className={classes.bottomButtonBox}>
        <Button
          variant="contained"
          color="primary"
          onClick={onClickMovetoLogin}
        >
          로그인
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onClickMovetoSignup}
        >
          회원가입
        </Button>
      </Box>
      <Box className={classes.toTopBox} onClick={onClickMoveTop}>
        <img src="/images/TO_THE_TOP2.png" />
      </Box>
    </Box>
  );
}
