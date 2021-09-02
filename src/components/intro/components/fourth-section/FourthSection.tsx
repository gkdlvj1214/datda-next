import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

export default function FourthSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box className={classes.contentBox}>
        <Box className={classes.textBox}>
          <Typography variant="h3">간단하게 선생님과</Typography>
          <Typography variant="h3">원아 관리하기</Typography>
          <Typography variant="h5">
            간편하게 선생님과 원아를 반배정 하기
          </Typography>
          <Typography variant="h5">
            자유롭게 반배정하기 너무 편하지 않나요?
          </Typography>
        </Box>
        <Box className={classes.imageBox}>
          <img src="/images/intro_web/intro5_graphic_back.svg" />
          <img src="/images/intro_web/intro5_graphic_front.svg" />
        </Box>
      </Box>
    </Box>
  );
}
