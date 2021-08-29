import { Box } from "@material-ui/core";
import useStyles from "./style";

export default function FirstSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      첫번째 구역
    </Box>
  );
}
