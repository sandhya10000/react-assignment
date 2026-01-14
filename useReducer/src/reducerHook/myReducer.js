//this Reducer function is pure function , immutable function
//two argument - state, action

export function myReducer(state, action) {
  console.log("Action received:", action);
  console.log("Payload:", action.payload);
  switch (action.type) {
    case "increase":
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, qty: product.qty + 1 }
          : product
      );
    case "decrease":
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, qty: product.qty - 1 }
          : product
      );
    default:
      return state;
  }
}
