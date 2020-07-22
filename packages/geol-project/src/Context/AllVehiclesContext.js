import {createContext} from 'react';

export const AllVehiclesContext = createContext({
  allVehicles: [],
  updateAllVehicles: () => {
    throw new Error('updateAllVehicles() not implemented');
  },
});
