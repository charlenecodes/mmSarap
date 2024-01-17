import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {styles} from './Login.styles';
import CustomButton from '../../components/CustomButton/CustomButton';
import {AuthContext} from '../../Context/authContext';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

// enable focus and submit on enter
function Login() {
  const {setCurrentUser, setIsLoggedIn} = useContext(AuthContext);
  const navigation = useNavigation();

  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const handleChange = (name, text) => {
    setLogin({
      ...login,
      [name]: text,
    });
  };

  const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

  const handleSubmit = async () => {
    // code here is from Postman, but has been modified to fit this specific case - there is a function in order to write the API depending on what tech is being used
    let data = JSON.stringify(login);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `http://${localhost}:3000/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        // object of the user info is in response.data
        // Welcome, /user/! is from response.data.message
        setCurrentUser(response.data.currentUser);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.log(error);
      });

    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              name="username"
              value={login.username}
              onChangeText={text => handleChange('username', text)}
              style={styles.input}
              placeholder="username"
              autoCorrect={false}
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              name="password"
              value={login.password}
              onChangeText={text => handleChange('password', text)}
              style={styles.input}
              secureTextEntry={true}
              textContentType="password"
              placeholder="password"
            />
            {/* <View style={styles.options}>
              <Pressable onPress={() => navigation.navigate('Register')}>
                <View>
                  <Text style={styles.register}>Create an account</Text>
                </View>
              </Pressable>

              <Pressable onPress={console.log('Create new password')}>
                <View>
                  <Text>Forgot password?</Text>
                </View>
              </Pressable>
            </View> */}

            <CustomButton text={'Log in'} onPress={handleSubmit} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
