import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

export default function FifthSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box className={classes.contentBox}>
        <Box className={classes.textBox}>
          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            투약 의뢰서로
          </Typography>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", marginBottom: 16 }}
          >
            아이건강 챙기기
          </Typography>
          <Typography variant="h5">
            닿다는 투약의뢰서를 온라인으로 접수하여
          </Typography>
          <Typography variant="h5">
            아이들의 건강한 생활을 위한 정확한 투약을
          </Typography>
          <Typography variant="h5">진행하도록 돕습니다.</Typography>
        </Box>
        <Box className={classes.imageBox}>
          <img src="/images/intro_web/intro6_graphic.svg" />
        </Box>
      </Box>
    </Box>
  );
}
