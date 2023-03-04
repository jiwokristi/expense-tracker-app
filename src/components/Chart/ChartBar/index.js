import { Grid, Typography, styled } from "@mui/material";
import { indigo } from "@mui/material/colors";

const ChartBarInner = styled(Grid)(({ theme }) => ({
  width: 16,
  height: "80%",
  borderRadius: 12,
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: indigo["A100"],
  overflow: "hidden",
}));

const ChartBarFill = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  transition: "all 0.3s ease-out",
}));

export default function ChartBar({ value, maxValue, label }) {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <ChartBarInner
        container
        direction="column"
        justifyContent="flex-end"
        item
      >
        <ChartBarFill style={{ height: barFillHeight }} />
      </ChartBarInner>
      <Grid item>
        <Typography variant="caption" fontWeight={500}>
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
}
