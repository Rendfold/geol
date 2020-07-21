import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import AuthContext from '../../../../lib/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

function LoginScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({username, password})} />
    </View>
  );
}

export default LoginScreen;
