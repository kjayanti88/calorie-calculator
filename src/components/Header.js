import React from "react";
import './CalorieCalculator.css'
//Displaying the header items : Title, TotalCalorie count and Delete All button
const Header = ({ deleteAllMeals, total }) => {
  return (
    <div className="header">
      <h1>Calorie Calculator <span style={{color:"red"}}>App</span></h1>
      <div className="totalCalorieCount">
        <h2>
          Total Calories: <span style={{ color: "red" }}>{total}</span>
        </h2>
      </div>
      <div className="deleteAllBtn">
        <button onClick={() => deleteAllMeals()}>Delete All</button>
      </div>
    </div>
  );
};

export default Header;
