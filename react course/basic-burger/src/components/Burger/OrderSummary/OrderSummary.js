import React from "react";
import Aux from "../../../hoc/reactAux/reactAux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey} :</span>
      {props.ingredients[igKey]}{" "}
    </li>
  ));
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A burger with following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p> Continue to checkout?.</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
