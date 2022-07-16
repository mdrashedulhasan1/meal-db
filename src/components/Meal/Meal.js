import React from 'react';

const Meal = (props) => {
    const {strMeal, strInstructions, strMealThumb} = props.meal;
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0,100)}</p>
        </div>
    );
};

export default Meal;