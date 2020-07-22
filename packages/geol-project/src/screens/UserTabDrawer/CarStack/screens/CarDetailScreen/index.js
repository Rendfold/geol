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
} from 'react-native';
import DatePicker from './DatePicker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {AllVehiclesContext} from '../../../../../Context/AllVehiclesContext';

function DetailScreen() {
  const {allVehicles, updateAllVehicles} = useContext(AllVehiclesContext);

  console.log('sss', allVehicles.cars);
  const [, setDate] = React.useState(new Date());
  const handleChange = newDate => {
    setDate(newDate);
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      {/* <ImageBackground source={Geol} style={{ width: '100%', height: 300 }} /> */}

      <View style={{paddingHorizontal: 16}}>
        <DatePicker handleChange={handleChange} />
      </View>
      <View>
        <Icon name={'scooter'} size={30} color={'#8AD261'} />
        <Text />
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: '#6BA07F',
          width: '100%',
          height: 44,
          borderRadius: 6,
          marginTop: 20,
        }}>
        <Button title="Book Now" color="#6BA07F" />
      </TouchableOpacity>
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
          const latLng = `${41.8118838},${44.8267147}`;
          const label = 'Custom Label';
          const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`,
          });

          Linking.openURL(url);
        }}
      />

      <FlatList
        data={allVehicles.cars}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: item.imageUrl}}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.itemText}>{item.type}</Text>
              <Text style={styles.itemText}>color: {item.color}</Text>
              <Text style={styles.itemText}>model: {item.model}</Text>
              <Text style={styles.itemText}>price: {item.price}</Text>
              <Text style={styles.itemText}>
                licenseNumber: {item.licenseNumber}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    // backgroundColor: 'green',
    marginVertical: 10,
    width: '100%',
    height: 300,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#E2FAF4',
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: '#58C882',
    alignItems: 'center',
  },
  imageContainer: {
    // backgroundColor: 'red',
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

export default DetailScreen;
