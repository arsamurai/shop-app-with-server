const SET_CATEGORY = "SET-SORT-BY";
const SORT_BY = "SORT-BY";

let initializationState = {
  category: null,
  sortBy: {
    type: "rating",
    order: "desc",
  },
};

const filters = (state = initializationState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const setSortBy = ({ type, order }) => ({
  type: SORT_BY,
  payload: { type, order },
});

export default filters;
