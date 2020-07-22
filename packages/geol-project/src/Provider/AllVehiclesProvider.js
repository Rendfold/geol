import React, {useState} from 'react';
import {AllVehiclesContext} from '../Context/AllVehiclesContext';

export const AllVehiclesProvider = ({children}) => {
  const [allVehicles, setAllVehicles] = useState({});

  const updateAllVehicles = AllVehiclesProviderInformation => {
    setAllVehicles(AllVehiclesProviderInformation);
  };

  return (
    <AllVehiclesContext.Provider
      value={{
        allVehicles: allVehicles,
        updateAllVehicles: updateAllVehicles,
      }}>
      {children}
    </AllVehiclesContext.Provider>
  );
};
