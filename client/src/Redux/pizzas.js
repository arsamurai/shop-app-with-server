import axios from "axios";
const SET_PIZZAS = "SET-PIZZAS";
const SET_LOADED = "SET-LOADED";

let initializationState = {
  pizzas: [],
  isLoaded: false,
};

const pizzas = (state = initializationState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        pizzas: action.pizzas,
        isLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.value,
      };
    default:
      return state;
  }
};

const setPizzas = (items) => ({
  type: SET_PIZZAS,
  pizzas: items,
});

export const setLoaded = (value) => ({
  type: SET_LOADED,
  value,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(process.env.REACT_APP_API_URL + `api/goods?${
      category !== null ? `category=${category}&` : ""}sort=${sortBy.type}&order=${sortBy.order}`)
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export default pizzas;
