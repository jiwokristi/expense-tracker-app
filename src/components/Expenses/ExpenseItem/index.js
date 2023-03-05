import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import ExpenseDate from "components/Expenses/ExpenseDate";

import { formatAmount } from "helpers";

const CustomCard = styled(Card)({
  padding: "0.5rem",
  margin: "1rem 0",
  borderRadius: 12,
  backgroundColor: grey[100],
  boxShadow: "0px 3px 10px rgba(188, 200, 231, 0.2)",
});

const PriceButton = styled(Button)(({ theme }) => ({
  border: `1.5px solid ${theme.palette.primary.main}`,
  padding: "0.5rem",
  borderRadius: 12,
}));

export default function ExpenseItem({ props }) {
  const theme = useTheme();

  const matches850 = useMediaQuery("(max-width:850px)");
  const matches700 = useMediaQuery("(max-width:700px)");
  const matches610 = useMediaQuery("(max-width:610px)");

  const { title, amount, date } = props;

  return (
    <li>
      <CustomCard>
        <CardContent>
          <Grid container alignItems="center" style={{ gap: "1rem" }}>
            <Grid item>
              <ExpenseDate date={date} />
            </Grid>

            <Grid
              container
              direction={matches610 ? "column" : "row"}
              justifyContent="space-between"
              alignItems={matches610 ? "flex-start" : "center"}
              item
              zeroMinWidth
              style={{ flex: 1 }}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  noWrap
                  width={matches700 ? "14rem" : matches850 ? "20rem" : "27rem"}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <PriceButton variant={matches610 ? "outlined" : "contained"}>
                  <Typography
                    variant="h6"
                    style={{
                      color: matches610 ? theme.palette.primary.main : grey[50],
                    }}
                  >
                    ${formatAmount(amount)}
                  </Typography>
                </PriceButton>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CustomCard>
    </li>
  );
}
