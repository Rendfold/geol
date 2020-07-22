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

function CarSearchScreen({navigation}) {
  // const {allVehicles, updateAllVehicles} = useContext(AllVehiclesContext);
  // console.log('pa ra lala lala-->', allVehicles);
  const [data, setData] = useState();
  useEffect(() => {
    axios.get('https://ciu2020.herokuapp.com/vehicle/list').then(response => {
      console.log('ress data--->', response.data);
      setData(response.data);
      console.log('datata->', data);
    });
  });
  // console.log('datata->111->', data);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../../../images/electric-green-car.jpg')}
        style={styles.imgBackground}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('CarDetailScreen')}>
              <Text style={styles.itemText}>{item.type}</Text>
            </TouchableOpacity>
          )}
        />
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
    marginTop: 20,
    paddingVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    backgroundColor: 'rgba(107, 160, 127, 0.7)',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CarSearchScreen;
