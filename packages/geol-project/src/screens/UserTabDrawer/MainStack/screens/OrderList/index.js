import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Platform,
  Linking,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import { isEmpty } from 'lodash';
import { OrderListContext } from '../../../../../Context/OrderListContext';
import axios from 'axios';
function OrderList({ navigation }) {
  const { orderList, updateOrderList } = useContext(OrderListContext);
  console.log('aqane geeshveba data------>', orderList);
  useEffect(() => {
    axios.get('https://ciu2020.herokuapp.com/route/list').then(response => {
      console.log('ress data car ord--->', response.data);
      updateOrderList(response.data);
      // updateAllVehicles(response.data);
    });
  }, []);
  // console.log('sss', allVehicles.cars);
  const [, setDate] = React.useState(new Date());
  const handleChange = newDate => {
    setDate(newDate);
  };
  return (
    <View style={{ backgroundColor: '#fff', flex: 1, }}>
      <FlatList
        data={orderList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            {console.log(item, 'item')}
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.vehicle.imageUrl }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.itemText}>{item.type}</Text>
              {!isEmpty(item.vehicle.licenseNumber) ? (
                <Text style={styles.itemText}>color: {item.vehicle.color}</Text>
              ) : null}
              <Text style={styles.itemText}>model: {item.vehicle.model}</Text>
              <Text style={styles.itemText}>price: {item.vehicle.price}$</Text>
              {!isEmpty(item.vehicle.licenseNumber) ? (
                <Text style={styles.itemText}>
                  Car Number: {item.vehicle.licenseNumber}
                </Text>
              ) : null}
            </View>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <View
            style={{
              marginTop: 50,
              height: 40,
              alignItems: 'center',
              width: '100%',
              flex: 1,
              borderBottomColor: '#D5D5D5',
              borderBottomWidth: 1,
              flex: 1
            }}>
            <Text style={{ fontSize: 16 }}>Order List</Text>
          </View>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#E2FAF4',
    width: '90%',
    height: 300,
    borderRadius: 16,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    zIndex: 10,
    paddingVertical: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0B3E32',
  },
});
export default OrderList;