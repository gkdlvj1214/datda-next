import { Box } from "@material-ui/core";
import useStyles from "./style";

export default function SecondSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      두번째 구역
    </Box>
  );
}
