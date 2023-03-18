import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = props => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [isClicked, setIsClicked] = useState(false);

  const titleChangeHandler = event => {
    setUserInput(prevState => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = event => {
    setUserInput(prevState => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = event => {
    setUserInput(prevState => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setUserInput(prevState => {
      return {
        ...prevState,
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
  };

  const buttonClickedHandler = () => {
    setIsClicked(!isClicked);
  };

  let form = (
    <>
      <div className='new-expense__control'>
        <label>Title</label>
        <input
          type='text'
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input
          type='number'
          min='0.01'
          step='0.01'
          value={userInput.enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input
          type='date'
          min='2019-01-01'
          max='2022-12-31'
          value={userInput.enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
    </>
  );

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>{isClicked && form}</div>
      <div className='new-expense__actions'>
        <button
          onClick={buttonClickedHandler}
          style={isClicked ? undefined : { display: "none" }}
        >
          Cancel
        </button>
        <button
          type='submit'
          onClick={buttonClickedHandler}
          style={
            isClicked
              ? undefined
              : {
                  justifyContent: "flex-end",
                }
          }
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
