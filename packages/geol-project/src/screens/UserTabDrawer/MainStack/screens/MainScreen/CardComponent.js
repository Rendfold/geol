import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./autohauser.png'),
  },
  {
    text: 'Card two',
    name: 'One',
    image: require('./autohauser.png'),
  },
  {
    text: 'Card three',
    name: 'One',
    image: require('./autohauser.png'),
  },
  {
    text: 'Card four',
    name: 'One',
    image: require('./autohauser.png'),
  },
];
export default class CardComponent extends Component {
  render() {
    return (
      <Container style={{flex: 1, width: '90%'}}>
        <Text
        style={{fontSize: 22, color: '#000', fontWeight: "bold", fontFamily: "Cochin", paddingVertical: 10 }}
        >
          Popular Cars
        </Text>
        <View style={{}}>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}