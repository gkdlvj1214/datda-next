import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

export default function FirstSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box>
        <Box>
          <Typography variant="h3">정확한 공지사항과</Typography>
          <Typography variant="h3">알림장 전달받기</Typography>
          <Typography variant="h5">잘못된 공지를 받고 혼란스러웠던</Typography>
          <Typography variant="h5">경험이 있나요? 닿다는 정확한</Typography>
          <Typography variant="h5">
            공지 내용을 가장 빠르게 전달합니다.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
