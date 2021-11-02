import axios from "axios";
const SET_PIZZA = "SET-PIZZA";

let initializationState = {
  pizza: {}
};

const pizzaBlock = (state = initializationState, action) => {
  switch (action.type) {
    case SET_PIZZA:
      return {
        ...state,
        pizza: action.pizza,
      };
    default:
      return state;
  }
};

const setPizza = (pizza) => ({
  type: SET_PIZZA,
  pizza,
});

export const fetchPizzaItem = (id) => (dispatch) => {
  axios
    .get(process.env.REACT_APP_API_URL + `api/goods/${id}`)
    .then(({ data }) => {
      dispatch(setPizza(data));
    });
};

export default pizzaBlock;
