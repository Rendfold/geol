import React, {useEffect, useState, useContext} from 'react';
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
  Alert,
} from 'react-native';
import DatePicker from './DatePicker';
import {isEmpty} from 'lodash';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {AllVehiclesContext} from '../../../../../Context/AllVehiclesContext';
import axios from 'axios';

function CarScreen({route, navigation}) {
  const {allVehicles, updateAllVehicles} = useContext(AllVehiclesContext);

  const [, setDate] = React.useState(new Date());
  const handleChange = newDate => {
    setDate(newDate);
  };

  // const onSubmit = () => {
  //   Alert.alert('Thank you', 'Booking was addded successfully.', [
  //     {text: 'OK'},
  //   ]);
  //   navigation.navigate('CarSearchScreen');
  // };

  const onSubmit = id => {
    // axios.get('https://ciu2020.herokuapp.com/vehicle/list').then(response => {
    //   console.log('ress data--->', response.data);
    //   updateAllVehicles(response.data);
    // });

    axios
      .post('https://ciu2020.herokuapp.com/route/create', {
        vehicle: id,
        user: '5f148928a49b341e5aa2b90b',
        routeStart: new Date(),
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    // axios
    //   .put(
    //     'https://ciu2020.herokuapp.com/route/create',
    //     ('vehicle': '5f187f3c26f607c61c3efd2b'),
    //     ('user': '5f148928a49b341e5aa2b90b'),
    //     ('routeStart': '2020-07-18T20:09:21.177Z'),
    //     {headers: {'Content-Type': 'text/plain'}},
    //   )
    //   .then(r => console.log(r))
    //   .catch(e => console.log(e));
  };

  let item = route.params && route.params.data;
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.itemContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.imageUrl}}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.itemText}>{item.type}</Text>
          {!isEmpty(item.color) ? (
            <Text style={styles.itemText}>color: {item.color}</Text>
          ) : null}
          <Text style={styles.itemText}>model: {item.model}</Text>
          <Text style={styles.itemText}>price: {item.price}$</Text>
          {!isEmpty(item.licenseNumber) ? (
            <Text style={styles.itemText}>
              Car Number: {item.licenseNumber}
            </Text>
          ) : null}
        </View>
      </View>
      <View style={{alignItems: 'center', paddingBottom: 15}}>
        <View
          style={{
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#6BA07F',
            width: '40%',
          }}>
          <DatePicker handleChange={handleChange} />
        </View>
      </View>
      {item.location ? (
        <Button
          title="See At Map"
          color="#6BA07F"
          style={{
            backgroundColor: '#6BA07F',
            width: '100%',
            height: 44,
            borderRadius: 6,
            marginTop: 20,
          }}
          onPress={() => {
            const scheme = Platform.select({
              ios: 'maps:0,0?q=',
              android: 'geo:0,0?q=',
            });
            const latLng = `${item.location[0]},${item.location[1]}`;
            const label = 'Custom Label';
            const url = Platform.select({
              ios: `${scheme}${label}@${latLng}`,
              android: `${scheme}${latLng}(${label})`,
            });

            Linking.openURL(url);
          }}
        />
      ) : null}

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => onSubmit(item._id)}
          style={{
            backgroundColor: '#6BA07F',
            width: '50%',
            height: 44,
            borderRadius: 6,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              textAlign: 'center',
              lineHeight: 44,
            }}>
            Finish
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

export default CarScreen;
