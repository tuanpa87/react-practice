import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const purchaseBurgerSuccess = (id, orderData) => ({
  type: actionTypes.PURCHASE_BURGER_SUCCESS,
  orderId: id,
  orderData: orderData
});

const purchaseBurgerFailed = error => ({
  type: actionTypes.PURCHASE_BURGER_FAILED,
  error: error
});

const purchaseBurgerStart = () => ({
  type: actionTypes.PURCHASE_BURGER_START
});

export const purchaseBurger = (orderData, token) => dispatch => {
  dispatch(purchaseBurgerStart());
  axios
    .post("/orders.json?auth=" + token, orderData)
    .then(response => {
      console.log(response.data);
      dispatch(purchaseBurgerSuccess(response.data.name, orderData));
    })
    .catch(error => {
      dispatch(purchaseBurgerFailed(error));
    });
};

export const purchaseInit = () => ({
  type: actionTypes.PURCHASE_INIT
});

/* ****************************** */

const fetchOrdersSuccess = orders => ({
  type: actionTypes.FETCH_ORDER_SUCCESS,
  orders: orders
});

const fetchOrdersFailed = error => ({
  type: actionTypes.FETCH_ORDER_FAILED,
  error: error
});

const fetchOrderStart = () => ({
  type: actionTypes.FETCH_ORDER_START
});

export const fetchOrders = (token, userId) => dispatch => {
  dispatch(fetchOrderStart());
  const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`
  console.log(queryParams)
  axios
    .get("/orders.json" + queryParams)
    .then(res => {
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({
          ...res.data[key],
          id: key
        });
      }
      dispatch(fetchOrdersSuccess(fetchedOrders));
    })
    .catch(err => {
      dispatch(fetchOrdersFailed(err));
    });
};
