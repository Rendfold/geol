import * as React from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import DatePicker from './DatePicker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function DetailScreen() {
  const [, setDate] = React.useState(new Date());

  const handleChange = (newDate) => {
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
        <Button title="Book Now" color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

export default DetailScreen;
