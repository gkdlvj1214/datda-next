import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

export default function FifthSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box>
        <Box>
          <Typography variant="h3">투약 의뢰서로</Typography>
          <Typography variant="h3">아이건강 챙기기</Typography>
          <Typography variant="h5">
            닿다는 투약의뢰서를 온라인으로 접수하여
          </Typography>
          <Typography variant="h5">
            아이들의 건강한 생활을 위한 정확한 투약을
          </Typography>
          <Typography variant="h5">진행하도록 돕습니다.</Typography>
        </Box>
      </Box>
    </Box>
  );
}
