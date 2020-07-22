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
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: '#6BA07F',
          width: '30%',
          height: 44,
          borderRadius: 6,
          marginTop: 20,
        }}>
        <Button title="Book Now" color="#fff" />
      </TouchableOpacity>

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
              <Text style={styles.itemText}>{item.color}</Text>
              <Text style={styles.itemText}>{item.model}</Text>
              <Text style={styles.itemText}>{item.price}</Text>
              <Text style={styles.itemText}>{item.licenseNumber}</Text>
              <Text style={styles.itemText}>{item.type}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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

export default DetailScreen;
