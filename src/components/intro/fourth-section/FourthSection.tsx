import { Box } from "@material-ui/core";
import useStyles from "./style";

export default function FourthSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      세번째 구역
    </Box>
  );
}
