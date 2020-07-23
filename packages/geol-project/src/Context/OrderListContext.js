import {createContext} from 'react';

export const OrderListContext = createContext({
  orderList: [],
  updateOrderList: () => {
    throw new Error('updateAllVehicles() not implemented');
  },
});
