import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
const carImage = require('./images/autohauser.png');
const cards = [
  {
    text: 'Eco Car',
    name: '5.0',
    image: require('./images/carDefault.jpg'),
    price: '60$',
  },
  {
    text: 'Eco Car',
    name: '4.8',
    image: require('./images/car_4.png'),
    price: '55$',
  },
  {
    text: 'Eco Car',
    name: '4.7',
    image: require('./images/car_3.jpg'),
    price: '40$',
  },
  {
    text: 'Eco Car',
    name: '4.5',
    image: require('./images/car_2.jpg'),
    price: '50$',
  },
  {
    text: 'Eco Car',
    name: '4.4',
    image: require('./images/car_1.jpg'),
    price: '35$',
  },
];
export default class CardComponent extends Component {
  render() {
    return (
      <Container style={{width: '100%', paddingHorizontal: 16, height: 500}}>
        <Text
          style={{
            fontSize: 22,
            color: '#000',
            fontWeight: 'bold',
            fontFamily: 'Cochin',
            paddingVertical: 10,
          }}>
          Popular Cars
        </Text>
        <View style={{}}>
          <DeckSwiper
            dataSource={cards}
            renderItem={(item) => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('DetailScreen')}>
                <Card style={{elevation: 3}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={carImage} />
                      <Body>
                        <Text>{item.text}</Text>
                        <Text note>
                          {item.price}
                          <Text style={{fontSize: 11, color: '#5D5B54'}}>
                            /day
                          </Text>
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image style={{height: 300, flex: 1}} source={item.image} />
                  </CardItem>
                  <CardItem>
                    <Icon name="star" style={{color: '#FFD500'}} />
                    <Text>{item.name}</Text>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      </Container>
    );
  }
}
