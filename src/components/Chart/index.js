import { Grid, styled } from "@mui/material";
import { indigo } from "@mui/material/colors";

import ChartBar from "./ChartBar";

const ChartContainer = styled(Grid)({
  height: "10rem",
  padding: "1rem",
  borderRadius: 12,
  backgroundColor: indigo[50],
  textAlign: "center",
});

export default function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map(({ value }) => value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <ChartContainer container justifyContent="space-around">
      {dataPoints.map(({ value, label }) => (
        <Grid key={label} item>
          <ChartBar value={value} maxValue={totalMaximum} label={label} />
        </Grid>
      ))}
    </ChartContainer>
  );
}
