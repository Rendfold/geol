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

function BicycleDetailScreen({navigation}) {
  const {allVehicles, updateAllVehicles} = useContext(AllVehiclesContext);

  console.log('bbbbbb', allVehicles.bicycle);
  const [, setDate] = React.useState(new Date());
  const handleChange = newDate => {
    setDate(newDate);
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
        data={allVehicles.bicycle}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('CarScreen', {data: item})}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: item.imageUrl}}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.itemText}>{item.type}</Text>
              <Text style={styles.itemText}>model: {item.model}</Text>
              <Text style={styles.itemText}>price: {item.price}$</Text>
              <View
                onPress={() => {}}
                style={{
                  backgroundColor: '#6BA07F',
                  width: '80%',
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
                  Book Now
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    width: '100%',
    height: 320,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: 320,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#58C882',
    alignItems: 'center',
  },
  imageContainer: {
    paddingVertical: 15,
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

export default BicycleDetailScreen;
