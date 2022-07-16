import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [mealsText, setMealsText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[mealsText])
    const handleMealField = (e) =>{
        const searchTextValue = e.target.value;
        setMealsText(searchTextValue);
    }
    return (
        <div>
            <input onChange={handleMealField} type="text" name="" id=""  placeholder='Search any meal'/>
            <div>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;