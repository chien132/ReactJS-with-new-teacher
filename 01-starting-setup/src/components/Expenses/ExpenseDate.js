import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.date.toLocaleString("vi-vn", { day: "2-digit" });
  const month = props.date.toLocaleString("vi-vn", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </div>
  );
}
export default ExpenseDate;
