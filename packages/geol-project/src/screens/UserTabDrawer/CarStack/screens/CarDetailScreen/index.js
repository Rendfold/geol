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
import { AllVehiclesContext } from '../../../../../Context/AllVehiclesContext';

function DetailScreen({ navigation }) {
  const { allVehicles, updateAllVehicles } = useContext(AllVehiclesContext);

  console.log('sss', allVehicles.cars);
  const [, setDate] = React.useState(new Date());
  const handleChange = newDate => {
    setDate(newDate);
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      <FlatList
        data={allVehicles.cars}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}
            onPress={() => navigation.navigate('CarScreen', { data: item })}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.itemText}>{item.type}</Text>
              {!isEmpty(item.licenseNumber) ? <Text style={styles.itemText}>color: {item.color}</Text>
                : null}
              <Text style={styles.itemText}>model: {item.model}</Text>
              <Text style={styles.itemText}>price: {item.price}$</Text>
              {!isEmpty(item.licenseNumber) ? <Text style={styles.itemText}>
                Car Number: {item.licenseNumber}
              </Text> : null
              }
              <View
                onPress={() => { }}
                style={{
                  backgroundColor: '#6BA07F',
                  width: '80%',
                  height: 44,
                  borderRadius: 6,
                  marginTop: 20,
                }}>
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center', lineHeight: 44 }}>Book Now</Text>
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
    height: 370,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: 370,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#58C882',
    alignItems: 'center',
  },
  imageContainer: {
    paddingVertical: 20,
    width: '100%',
    height: 150,
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    fontSize: 20,
    color: '#0B3E32',
    lineHeight: 28
  },
});

export default DetailScreen;
