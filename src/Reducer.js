export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((price, item) => item.price + price, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index);
      let newBasket = [...state.basket];
      // console.log(newBasket);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product (id: ${action.id}) as its not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "UPDATE_BASKET":
      console.log(action.count)
      return{
        ...state,
      }
    default:
      return state;
  }
};

export default reducer;
