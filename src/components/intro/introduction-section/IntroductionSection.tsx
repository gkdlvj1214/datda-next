import { Box, Container, Typography, Button } from "@material-ui/core";
import useStyles from "./style";

export default function IntroductionSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="h3">우리 아이 유치원 생활</Typography>
          <Typography variant="h3">더욱 스마트하게 관리하기</Typography>
        </Box>
        <Box>
          <Button variant="outlined" color="primary">
            로그인
          </Button>
          <Button variant="outlined" color="primary">
            회원가입
          </Button>
        </Box>
        <Box>
          <Typography variant="h5">Guest 로그인</Typography>
          <Typography variant="h6">
            아래 버튼은 자동로그인 버튼입니다. 미리 구축된 Datda를 기반으로
            사이트를 두럴볼 수 있습니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
