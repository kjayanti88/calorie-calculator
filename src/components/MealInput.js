import React from "react";

const MealInput = ({addMealHandler,mealName,calories,setMealName,setCalories,}) => {

  const onAddMealClick = () => {
    addMealHandler(); 
  };
// Setting the meal name and calorie and triggering addMealHandler to add the meal items aith calorie value
  return (
    <div className="mealInput">
        <input
          type="text"
          placeholder="Meal"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          min={0}
        /> <br/>
        <button onClick={onAddMealClick}>Add Meal</button>
    </div>
  );
};

export default MealInput;
