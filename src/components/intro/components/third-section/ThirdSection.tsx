import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

export default function ThirdSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box>
        <Box>
          <Typography variant="h3">아이들이 먹는 음식은</Typography>
          <Typography variant="h3">너무나도 중요하니까</Typography>
          <Typography variant="h5">아이들이 건강한 몸을 위해</Typography>
          <Typography variant="h5">
            닿다는 오늘의 식단들을 공유합니다.
          </Typography>
          <Typography variant="h5">쑥쑥 성장할 우리 아이들!</Typography>
        </Box>
      </Box>
    </Box>
  );
}
