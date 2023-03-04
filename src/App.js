import { useState } from "react";

import Expenses from "components/Expenses";
import NewExpense from "components/NewExpense";

export default function App() {
  const dummyExpenses = [
    {
      id: 1,
      title: "Chocolate",
      amount: 10,
      date: new Date(2020, 1, 14),
    },
    {
      id: 2,
      title: "A Book",
      amount: 12.99,
      date: new Date(2019, 0, 1),
    },
    {
      id: 3,
      title: "Skincare Pack",
      amount: 20,
      date: new Date(2019, 4, 10),
    },
    {
      id: 4,
      title: "A Razor",
      amount: 1.99,
      date: new Date(2019, 4, 21),
    },
    {
      id: 5,
      title: "Audio Book",
      amount: 5.99,
      date: new Date(2020, 1, 21),
    },
    {
      id: 6,
      title: "Movie Ticket",
      amount: 10.99,
      date: new Date(2020, 10, 20),
    },
  ];

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
