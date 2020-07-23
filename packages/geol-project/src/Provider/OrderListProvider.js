import React, {useState} from 'react';
import {OrderListContext} from '../Context/OrderListContext';

export const OrderListProvider = ({children}) => {
  const [orderList, setOrderList] = useState({});

  const updateOrderList = orderListInformation => {
    setOrderList(orderListInformation);
  };

  return (
    <OrderListContext.Provider
      value={{
        orderList: orderList,
        updateOrderList: updateOrderList,
      }}>
      {children}
    </OrderListContext.Provider>
  );
};
