import React from "react";
import classes from "./Order.css";

const order = props => {
  console.log(props.ingredients);
  const ingredients = [];

  for (let ingredientName in props.ingredients)
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });

  //console.log(ingredients);

  const ingredientOutput = ingredients.map(ig => (
    <span
      key={ig.name}
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0px 8px",
        padding: "5px",
        border: "1px solid #ccc"
      }}
    >
      {" "}
      {ig.name} ({ig.amount}){" "}
    </span>
  ));

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput} </p>
      <p>
        Price: <strong>USD: {props.price.toFixed(2)} </strong>
      </p>
    </div>
  );
};

export default order;
