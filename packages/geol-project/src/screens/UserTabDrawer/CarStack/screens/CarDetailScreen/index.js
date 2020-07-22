import * as React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import DatePicker from './DatePicker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function DetailScreen() {
  const [, setDate] = React.useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      {/* <ImageBackground source={Geol} style={{ width: '100%', height: 300 }} /> */}


      <View style={{ paddingHorizontal: 16 }}>
        <DatePicker handleChange={handleChange} />
      </View>
      <View>
        <Icon name={'scooter'} size={30} color={'#8AD261'} />
        <Text />
      </View>
      <TouchableOpacity
        onPress={() => { }}
        style={{
          backgroundColor: '#6BA07F',
          width: '100%',
          height: 44,
          borderRadius: 6,
          marginTop: 20,
        }}>
        <Button title="Book Now" color="#6BA07F" />
      </TouchableOpacity>
      <TouchableOpacity
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
        }}>
        <Text>See At Map</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default DetailScreen;
