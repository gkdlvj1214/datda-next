import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

export default function SixthSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box>
        <Box>
          <Typography variant="h3">빠르게</Typography>
          <Typography variant="h3">차량정보</Typography>
          <Typography variant="h3">확인하기</Typography>
          <Typography variant="h5">우리 아이 무슨 버스 타야 좋을까</Typography>
          <Typography variant="h5">
            우리 아이는 언제쯤 집에 도착하는지
          </Typography>
          <Typography variant="h5">
            궁금할 때 닿다를 통해 빠르게 확인하세요
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
