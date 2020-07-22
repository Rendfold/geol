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



const car = require('./Car.png')

function DetailCarScreen() {
    return (
        <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View>
                <ImageBackground source={car} style={{ width: '100%', height: 300 }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 16, paddingTop: 20 }}>
                    <Icon name="check" size={25} color="#6BA07F"/>
                    <Text style={{ paddingLeft: 5, fontSize: 16, color: '#52514C', paddingRight: 16, lineHeight: 24 }}>
                        An electric car is an automobile that is propelled by one or more electric motors, using energy stored in rechargeable batteries.
                     </Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 16, paddingTop: 16 }}>
                    <IconB name="routes-clock" size={30} color="#6BA07F"/>
                    <Text style={{ paddingLeft: 5, fontSize: 16, color: '#52514C', paddingRight: 16, lineHeight: 24 }}>
                        Fit location,date and car details.we offer big variety of cars.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 16, paddingTop: 16 }}>
                    <IconB name="shield-car" size={30} color="#6BA07F"/>
                    <Text style={{ paddingLeft: 5, fontSize: 16, color: '#52514C', paddingRight: 16, lineHeight: 24 }}>
                        Meet car owner at chosen location.Our support team is 24/7 online dor your best car trip
                     </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default DetailCarScreen;
