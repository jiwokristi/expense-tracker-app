import { useState } from "react";

import { Card, CardContent, Button, styled } from "@mui/material";

import ExpenseForm from "./ExpenseForm";

const NewExpenseContainer = styled(Card)({
  width: "50rem",
  maxWidth: "95%",
  padding: "1rem",
  margin: "2rem auto",
  borderRadius: 12,
  boxShadow: "0px 3px 10px rgba(188, 200, 231, 0.2)",
  textAlign: "center",
});

const CustomButton = styled(Button)({
  textTransform: "none",
  borderRadius: 10,
});

export default function NewExpense({ onAddExpense }) {
  const [isEditting, setIsEditting] = useState(false);

  const startEdittingHandler = () => setIsEditting(true);
  const stopEdittingHandler = () => setIsEditting(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    setIsEditting(false);
  };

  return (
    <NewExpenseContainer>
      <CardContent style={{ padding: 0 }}>
        {!isEditting && (
          <CustomButton
            disableElevation
            variant="contained"
            onClick={startEdittingHandler}
          >
            Add Expense
          </CustomButton>
        )}
        {isEditting && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEdittingHandler}
          />
        )}
      </CardContent>
    </NewExpenseContainer>
  );
}
