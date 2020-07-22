import * as React from 'react';
import {
    View,
    Text,
    Button,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { isEmpty } from 'lodash';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconA from 'react-native-vector-icons/dist/Entypo';
import IconB from 'react-native-vector-icons/dist/MaterialCommunityIcons';



const scooter = require('./ScooterDefault.png')

function DetailScreen() {
    return (
        <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View>
                <ImageBackground source={scooter} style={{ width: '100%', height: 300 }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 16, paddingTop: 20 }}>
                    <Icon name="check" size={25} color="#6BA07F"/>
                    <Text style={{ paddingLeft: 5, fontSize: 16, color: '#52514C', paddingRight: 16, lineHeight: 24 }}>A motorized scooter is a powered stand-up scooter using a small utility internal combustion engine or, more commonly, an electric motor. </Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 16, paddingTop: 16 }}>
                    <IconA name="direction" size={30} color="#6BA07F"/>
                    <Text style={{ paddingLeft: 5, fontSize: 16, color: '#52514C', paddingRight: 16, lineHeight: 24 }}>
                        Find a scooter near you and tap the button to unlock
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 16, paddingTop: 16 }}>
                    <IconB name="scooter" size={30} color="#6BA07F"/>
                    <Text style={{ paddingLeft: 5, fontSize: 16, color: '#52514C', paddingRight: 16, lineHeight: 24 }}>
                        Ride on bike lanes, car roads and sidewalks.
                        Don’t block public pathways, park by bike racks when available
                    </Text>

                </View>
            </View>
        </ScrollView>
    );
}

export default DetailScreen;
