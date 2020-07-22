import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import {AllVehiclesContext} from '../../../../../Context/AllVehiclesContext';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import IconB from 'react-native-vector-icons/dist/MaterialCommunityIcons';

function CarSearchScreen({navigation}) {
  const {allVehicles, updateAllVehicles} = useContext(AllVehiclesContext);
  console.log('pa ra lala lala-->', allVehicles);
  // const [data, setData] = useState();
  useEffect(() => {
    axios.get('https://ciu2020.herokuapp.com/vehicle/list').then(response => {
      console.log('ress data--->', response.data);
      updateAllVehicles(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log('datata->111->', data);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../../../images/electric-green-car.jpg')}
        style={styles.imgBackground}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('carsScreen')}>
          <Icon name="ios-car-outline" size={30} color="#fff" />
          <Text style={styles.itemText}>Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('bicycleScreen')}>
          <Icon name="bicycle" size={30} color="#fff" />
          <Text style={styles.itemText}>Bicycle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('electricScooter')}>
          <IconB name="scooter" size={30} color="#fff" />
          <Text style={styles.itemText}>Electric Scooter</Text>
        </TouchableOpacity>
        {/* <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
        /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  itemContainer: {
    marginTop: 30,
    paddingVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    backgroundColor: 'rgba(107, 160, 127, 0.7)',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 8,
  },
});

export default CarSearchScreen;
