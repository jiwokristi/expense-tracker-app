import { Card, CardContent, Typography, Grid, styled } from "@mui/material";
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

const PriceContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "0.5rem",
  borderRadius: 12,
}));

export default function ExpenseItem({ props }) {
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
              justifyContent="space-between"
              alignItems="center"
              item
              zeroMinWidth
              style={{ flex: 1 }}
            >
              <Typography variant="h6" noWrap width="27rem">
                {title}
              </Typography>
              <PriceContainer>
                <Typography variant="h6" style={{ color: grey[50] }}>
                  ${formatAmount(amount)}
                </Typography>
              </PriceContainer>
            </Grid>
          </Grid>
        </CardContent>
      </CustomCard>
    </li>
  );
}
