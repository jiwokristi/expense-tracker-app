import { Typography, styled } from "@mui/material";

import ExpenseItem from "components/Expenses/ExpenseItem";

const ScrollableUl = styled("ul")(({ theme }) => ({
  height: 320,
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "26px",
    height: "100px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#fff",
    width: "10px",
    borderRight: "10px solid #fff",
    borderLeft: "10px solid #fff",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    height: "30px",
    width: "10px",
    borderRadius: "10px",
    borderRight: "11px solid #fff",
    borderLeft: "11px solid #fff",
  },
  "&::-webkit-scrollbar-track-piece:start": {
    background: "#F4F7FB",
    borderRight: "9px solid #fff",
    borderLeft: "10px solid #fff",
    marginTop: "45px",
  },
  "&::-webkit-scrollbar-track-piece:end": {
    background: "#F4F7FB",
    marginBottom: "120px",
    borderRight: "9px solid #fff",
    borderLeft: "10px solid #fff",
  },
}));
export default function ExpensesList({ items }) {
  if (!items.length)
    return (
      <Typography variant="body2" style={{ textAlign: "center" }}>
        No expenses found.
      </Typography>
    );

  return (
    <ScrollableUl style={{ listStyle: "none", padding: 0 }}>
      {items?.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} props={{ title, amount, date }} />
      ))}
    </ScrollableUl>
  );
}
