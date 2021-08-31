import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

export default function SecondSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box>
        <Box>
          <Typography variant="h3">아이들의 모든 일상을</Typography>
          <Typography variant="h3">실시간으로 공유하기</Typography>
          <Typography variant="h5">
            아이들이 보고 싶은 순간순간에 닿다는
          </Typography>
          <Typography variant="h5">
            아이들의 생생한 일상사진을 실시간으로
          </Typography>
          <Typography variant="h5">공유합니다.</Typography>
        </Box>
      </Box>
    </Box>
  );
}
