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
import DatePicker from './DatePicker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { AllVehiclesContext } from '../../../../../Context/AllVehiclesContext';

function CarScreen() {
  const { allVehicles, updateAllVehicles } = useContext(AllVehiclesContext);

  const [, setDate] = React.useState(new Date());
  const handleChange = newDate => {
    setDate(newDate);
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={{ paddingHorizontal: 16 }}>
        <DatePicker handleChange={handleChange} />
      </View>
      <View>
        <Icon name={'scooter'} size={30} color={'#8AD261'} />
        <Text />
      </View>
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

      <TouchableOpacity
        onPress={() => { }}
        style={{
          backgroundColor: '#6BA07F',
          width: '100%',
          height: 44,
          borderRadius: 6,
          marginTop: 20,
        }}>
        <Button title="Finish" color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'green',
    margin: 5,
    width: '100%',
    height: 200,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    backgroundColor: 'pink',
  },
  imageContainer: {
    backgroundColor: 'red',
    width: '90%',
    height: 100,
    zIndex: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default CarScreen;
