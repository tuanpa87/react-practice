import React, { Component } from "react";
import Aux from "../../hoc/reactAux/reactAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-order";

const INGREDIENT_PRICES = {
  salad: 0.2,
  bacon: 1.5,
  cheese: 0.5,
  meat: 1.1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://basic-burger.firebaseio.com/ingrediens.json")
      .then(response => this.setState({ ingredients: response.data }))
      .catch(err => this.setState({ error: true }));
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    this.setState({ purchasable: sum > 0 });
  }
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngrediens = {
      ...this.state.ingredients
    };

    updateIngrediens[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updateIngrediens,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updateIngrediens);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;
    const updateIngrediens = {
      ...this.state.ingredients
    };
    updateIngrediens[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      ingredients: updateIngrediens,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updateIngrediens);
  };

  purchaseHandle = () => this.setState({ purchasing: true });
  purchaseCancelHandle = () => this.setState({ purchasing: false });
  purchaseContinueHandle = () => {
    const queryParams = [];
    queryParams.push("price=" + this.state.totalPrice);
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };

  render() {
    const disalbedInfo = {
      ...this.state.ingredients
    };

    for (let key in disalbedInfo) {
      disalbedInfo[key] = disalbedInfo[key] <= 0;
    }

    let burger = this.state.error ? (
      <p> Ingredients cant be loaded </p>
    ) : (
      <Spinner />
    );
    let orderSummary = null;

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            price={this.state.totalPrice}
            addIngridient={this.addIngredientHandler}
            removeIngridient={this.removeIngredientHandler}
            disabled={disalbedInfo}
            purchasable={this.state.purchasable}
            order={this.purchaseHandle}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancel={this.purchaseCancelHandle}
          purchaseContinue={this.purchaseContinueHandle}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) orderSummary = <Spinner />;

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandle}
        >
          {" "}
          {orderSummary}{" "}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
