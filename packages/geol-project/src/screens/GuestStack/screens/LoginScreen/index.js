import * as React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AuthContext from '../../../../lib/AuthContext';
import {isEmpty} from 'lodash';

const Geol = require('./Geol.png');

function LoginScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);
  let disabled = !isEmpty(username) && !isEmpty(password);

  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <ImageBackground source={Geol} style={{width: '100%', height: 300}} />
      <View style={{paddingHorizontal: 16}}>
        <View style={{height: 35}}>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={{fontSize: 18}}
            placeholderTextColor="#3E453B"
            floatingLabel
          />
        </View>
        <View style={{height: 35}}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={{fontSize: 18}}
            placeholderTextColor="#3E453B"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={() => signIn({username, password})}
          style={{
            backgroundColor:'#6BA07F',
            opacity: !disabled ? 0.5 : 1,
            width: '100%',
            height: 44,
            borderRadius: 6,
            marginTop: 20,
          }}
          disabled={disabled ? false : true}
          >
         <Text style={{color: '#fff', fontSize: 18, textAlign: 'center',lineHeight: 44}}>Sign In</Text>
         </TouchableOpacity>
        <View style={{paddingTop: 10}}>
          <Button
            title="Registration"
            color="#6BA07F"
            onPress={() => navigation.navigate('Registration')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
