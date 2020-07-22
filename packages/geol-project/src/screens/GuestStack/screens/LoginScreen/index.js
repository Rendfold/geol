import * as React from 'react';
import { View, Text, Button, TextInput, ImageBackground, } from 'react-native';
import AuthContext from '../../../../lib/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import { isEmpty } from 'lodash'

const Geol = require('./Geol.png');

function LoginScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, }}>
      <ImageBackground source={Geol} style={{ width: '100%', height: 300 }} />
      <View style={{ paddingHorizontal: 16 }}>
        <View style={{ height: 35 }}>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={{ fontSize: 18, }}
            placeholderTextColor="#3E453B"
            floatingLabel
          />
        </View>
        <View style={{ height: 35, }}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={{ fontSize: 18, }}
            placeholderTextColor="#3E453B"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={() => signIn({ username, password })}
          style={{ backgroundColor: '#6BA07F', width: '100%', height: 44, borderRadius: 6, marginTop: 20 }}>
          <Button title="Sign in"
            color="#fff"
            disabled={!isEmpty(username) && !isEmpty(password) ? false : true}
          />
        </TouchableOpacity>
        <View style={{paddingTop: 10}}>
          <Button title="Registration"
            color="#6BA07F"
            onPress={() => this.props.navigation.navigate('Registration')}
          />
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;