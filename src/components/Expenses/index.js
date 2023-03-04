import { useState } from "react";

import { Card, CardContent, Grid, styled } from "@mui/material";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const CustomCard = styled(Card)(() => ({
  width: "50rem",
  maxWidth: "95%",
  padding: "1rem",
  margin: "2rem auto",
  borderRadius: 12,
  boxShadow: "0px 3px 10px rgba(188, 200, 231, 0.2)",
}));

export default function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

  const filteredExpenses = items.filter(
    ({ date }) => date.getFullYear().toString() === filteredYear
  );

  return (
    <CustomCard>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <ExpensesFilter
              selected={filteredYear}
              onFilterChange={filterChangeHandler}
            />
          </Grid>
          <Grid item>
            <ExpensesChart expenses={filteredExpenses} />
          </Grid>
          <Grid item>
            <ExpensesList items={filteredExpenses} />
          </Grid>
        </Grid>
      </CardContent>
    </CustomCard>
  );
}
