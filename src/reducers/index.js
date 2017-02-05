import { combineReducers } from 'redux';
import { ordersReducer as orders } from '../features/Orders';

const rootReducer = combineReducers({
  orders,
});

export default rootReducer;
