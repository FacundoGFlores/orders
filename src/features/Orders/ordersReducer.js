const initialState = {
  orders: [],
};

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ORDER':
      return Object.assign(
        {},
        state,
        {
          orders: state.orders.concat(action.payload),
        },
      );
    default:
      return state;
  }
}
