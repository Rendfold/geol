import React, { Component } from 'react';
import { Image, ScrollView, View, TouchableOpacity, Text } from 'react-native';
const cards = [
    {
        image: require('./images/Scooter_1.jpg'),
    },
    {
        image: require('./images/Scooter_2.png'),
    },
    {
        image: require('./images/Scooter_3.jpg'),
    },
    {
        image: require('./images/Scooter_4.png'),
    },
    {
        image: require('./images/ScooterDefault.png'),
    },
];
export default class CardComponent extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: 400}}>
                <Text
                    style={{ paddingHorizontal: 16, fontSize: 22, color: '#000', fontWeight: "bold", fontFamily: "Cochin", paddingVertical: 10 }}
                >
                    NearBy Electric Scooter
                </Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                    style={{}}
                >
                    {cards.map((item, index) => (
                        <View key={index} style={{ paddingVertical: 10, marginRight: 16, }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailScreen')}>
                                <Image
                                    source={item.image}
                                    style={{ width: 200, height: 200, marginTop: 0, borderRadius: 6 }}
                                    imageStyle={{ borderRadius: 6 }}
                                />
                            </TouchableOpacity>
                        </View>
                    ))}

                </ScrollView>
            </View>
        );
    }
}