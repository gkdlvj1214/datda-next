import { Box } from "@material-ui/core";
import useStyles from "./style";

export default function FifthSection() {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      다섯번째 구역
    </Box>
  );
}
