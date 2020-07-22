import * as React from 'react';
import { View, Text, Button, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { isEmpty } from 'lodash';
import {DatePicker} from './DatePicker'


function DetailScreen() {

    return (
        <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
            {/* <ImageBackground source={Geol} style={{ width: '100%', height: 300 }} /> */}
            <View style={{ paddingHorizontal: 16 }}>
                <DatePicker />
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
