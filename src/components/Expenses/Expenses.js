import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map(expenses => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            ></ExpenseItem>
          ))
        )} */}
        {/* {filteredExpenses.length === 0 && }
        {filteredExpenses.length > 0 &&
          filteredExpenses.map(expenses => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}  
              amount={expenses.amount}
              date={expenses.date}
            ></ExpenseItem>
          ))} */}
        <ExpensesChart expense={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </>
  );
};

export default Expenses;
