import {
  Grid,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import moment from "moment";

const ExpenseDateContainer = styled(Grid)(({ theme }) => ({
  width: "5.5rem",
  height: "5.5rem",
  borderRadius: 12,
  border: `1.5px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  cursor: "pointer",
}));

export default function ExpenseDate({ date }) {
  const theme = useTheme();

  const matches = useMediaQuery("(max-width:610px)");

  const temp = moment(moment(date)._d.toLocaleDateString(), "M/D/YYYY")
    .format("MMMM/DD/YYYY")
    .split("/");

  const month = temp[0];
  const day = temp[1];
  const year = temp[2];

  return (
    <ExpenseDateContainer
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        boxShadow: matches ? theme.shadows[2] : undefined,
        backgroundColor: matches ? theme.palette.primary.main : undefined,
        color: matches ? grey[50] : undefined,
        ":hover": {
          boxShadow: matches ? theme.shadows[5] : undefined,
          backgroundColor: matches ? theme.palette.primary.dark : undefined,
        },
      }}
    >
      <Grid item>
        <Typography variant="subtitle2">{month}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="caption">{year}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">{day}</Typography>
      </Grid>
    </ExpenseDateContainer>
  );
}
