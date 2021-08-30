import { Box, Container, Typography, Button } from "@material-ui/core";
import useStyles from "./style";

export default function IntroductionSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Container maxWidth="lg" className={classes.titleBox}>
        <Box textAlign="center">
          <Typography variant="h3">우리 아이 유치원 생활</Typography>
          <Typography variant="h3">더욱 스마트하게 관리하기</Typography>
        </Box>
        <Box className={classes.buttonBox}>
          <Button variant="contained">로그인</Button>
          <Button variant="contained">회원가입</Button>
        </Box>
        <Box className={classes.guestLoginBox}>
          <Typography variant="h5">Guest 로그인</Typography>
          <Typography variant="h6">
            아래 버튼은 자동로그인 버튼입니다. 미리 구축된 Datda를 기반으로
            사이트를 둘러볼 수 있습니다.
          </Typography>
          <Box className={classes.guestButtonBox}>
            <Button variant="contained" color="primary">
              기관장 로그인
            </Button>
            <Button variant="contained" color="primary">
              선생님 로그인
            </Button>
            <Button variant="contained" color="primary">
              학부모 로그인
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
