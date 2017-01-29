import React from 'react';
import CustomTable from '../../shared';

const Columns = [
  {
    id: 1,
    text: 'Order',
  },
  {
    id: 2,
    text: 'Price',
  },
  {
    id: 3,
    text: 'User',
  },
];

const Orders = [
  {
    id: 1,
    food: 'chicken',
    price: '$5',
    user: 'Juan Corl',
  },
  {
    id: 2,
    food: 'eel sushi',
    price: '$15',
    user: 'Bridgette Sheeler',
  },
  {
    id: 3,
    food: 'hamburger',
    price: '$12',
    user: 'Mason Trent',
  },
  {
    id: 4,
    food: 'lasagna',
    price: '$14',
    user: 'Dorris Slankard',
  },
];


const OrdersList = () => (
  <div>
    <h1>Orders List</h1>
    <CustomTable name="orders" cols={Columns} rows={Orders} />
  </div>
);

export default OrdersList;
