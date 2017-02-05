export default function addOrder(order) {
  return {
    type: 'ADD_ORDER',
    payload: order,
  };
}
