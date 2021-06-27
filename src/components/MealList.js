import React from 'react';

const MealList = ({meals, deleteMealHandler}) =>{
//Creating the meal list data containing the meal name, calories and delete button
   return(
        <div className="mealListhead">
            {meals.map((meal,index)=>(
                <div className="mealListMain" key={index}>
                    <div className="mealListData">{`${meal.mealName} : ${meal.calories}`}</div>
                    <div className="mealListDeleteBtn">
                        <button  onClick={()=>deleteMealHandler(meal.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MealList;