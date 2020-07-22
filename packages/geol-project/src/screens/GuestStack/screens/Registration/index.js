import * as React from 'react';
import { View, Text, Button, TextInput, ImageBackground, } from 'react-native';
import AuthContext from '../../../../lib/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isEmpty } from 'lodash'

function Registration() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  let disabled = isEmpty(name) || isEmpty(surname) || isEmpty(username) || isEmpty(password);

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 20 }}>
        <View style={{ height: 35, paddingVertical: 10 }}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={{ fontSize: 18, }}
            placeholderTextColor="#3E453B"
          />
        </View>
        <View style={{ height: 35, paddingVertical: 10 }}>
          <TextInput
            placeholder="Surname"
            value={surname}
            onChangeText={setSurname}
            style={{ fontSize: 18, }}
            placeholderTextColor="#3E453B"
          />
        </View>
        <View style={{ height: 35, paddingVertical: 10 }}>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={{ fontSize: 18, }}
            placeholderTextColor="#3E453B"
          />
        </View>
        <View style={{ height: 35, paddingVertical: 10 }}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={{ fontSize: 18, }}
            placeholderTextColor="#3E453B"
            maxLength={16}
            minLength={6}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={() => signIn({ username, password})}
          style={{
            backgroundColor: disabled? '#A2BEA4':'#6BA07F',
            width: '100%',
            height: 44,
            borderRadius: 6,
            marginTop: 20,
          }}
          disabled={!disabled ? false : true}
        >
          <Text style={{color: '#fff', fontSize: 18, textAlign: 'center',lineHeight: 44}}>Registration</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Registration;