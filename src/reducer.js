import { UPDATE_REMARK } from "./Remarks";
import Data from "./Data.json";

const initialState = {
  coffeeItems: Data,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REMARK:
      const { id, remark } = action.payload;
      const updatedCoffeeItems = state.coffeeItems.map((val) => {
        if (val.id === id) {
          return { ...val, remark };
        }
        return val;
      });
      return {
        ...state,
        coffeeItems: updatedCoffeeItems,
      };
    default:
      return state;
  }
};

export default reducer;