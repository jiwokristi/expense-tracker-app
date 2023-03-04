import { Grid, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import moment from "moment";

const ExpenseDateContainer = styled(Grid)(({ theme }) => ({
  width: "5.5rem",
  height: "5.5rem",
  borderRadius: 12,
  backgroundColor: theme.palette.primary.main,
  color: grey[50],
}));

export default function ExpenseDate({ date }) {
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
