import * as React from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker'


import { isEmpty } from 'lodash';


function DetailScreen() {
    const [date, setDate] = useState(new Date())

    return (
        <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
            {/* <ImageBackground source={Geol} style={{ width: '100%', height: 300 }} /> */}
            <View style={{ paddingHorizontal: 16 }}>

            </View>
            <TouchableOpacity
                onPress={() => signIn({ username, password })}
                style={{
                    backgroundColor: '#6BA07F',
                    width: '100%',
                    height: 44,
                    borderRadius: 6,
                    marginTop: 20,
                }}>
                <Button
                    title="Book Now"
                    color="#fff"
                    disabled={!isEmpty(username) && !isEmpty(password) ? false : true}
                />
            </TouchableOpacity>
        </ScrollView >
    );
}

export default DetailScreen;
