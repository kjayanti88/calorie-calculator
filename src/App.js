import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MealInput from "./components/MealInput";
import MealList from "./components/MealList";

function App() {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);

//Adding selected meals and calories to meal handler
  const addMealHandler = () => {
    const oldMeals = [...meals];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000),
    };

    const newMeals = oldMeals.concat(meal);

    //validating if the calorie field or mealName is not empty
    if (calories <= 0 || mealName === "") {
      alert("Field must not be empty");
    } else {
      setMeals(newMeals);
    }
    setMealName("");
    setCalories(0);
  };

  //Deleting the selected meal using its id
  const deleteMealHandler = (id) => {
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meal) => meal.id !== id);
    setMeals(newMeals);
  };

  //Deleting all the items
  const deleteAllMeals = () =>{
    setMeals([]);
  }

  const total = meals.map((meal)=>meal.calories).reduce((acc,val)=> acc + +val,0);
  console.log(total);

  return (
    <div className="App">
      <div className="headerMain">
      <Header deleteAllMeals={deleteAllMeals} total={total}/>
      </div>
      <div className="mealInputMain">
      <MealInput
        addMealHandler={addMealHandler}
        mealName={mealName}
        calories={calories}
        setMealName={setMealName}
        setCalories={setCalories}
      />
      </div>
      
      <div className="MealList">
        <MealList meals={meals} deleteMealHandler={deleteMealHandler} />
      </div>
    </div>
  );
}

export default App;
