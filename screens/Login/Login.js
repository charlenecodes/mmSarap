import { Text, View, TextInput, Pressable, SafeAreaView, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Login.styles';
import { useNavigation } from '@react-navigation/native';


// enable focus and submit on enter
const Login = (props) => {
  console.log(props)
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {/* <Image
            source={require('../../images/logo.png')}
            style={styles.logo}
          /> */}
          <Image
            source={require('../../images/title.png')}
            style={styles.appName}
          />
        </View>


        <KeyboardAvoidingView>
          <View 
            style={styles.inputContainer}
          >
          <Text
            style={styles.title}
          >Login</Text>
          <TextInput
            name='email'
            // value={login.username}
            // onChangeText={setLogin(login.username)}
            style={styles.input}
            placeholder='username'
          />
          <TextInput
            name='email'
            // value={login.password}
            // onChangeText={setLogin(login.password)}
            style={styles.input}
            secureTextEntry={true}
            textContentType='password'
            placeholder='password'
          />
          <View
            style={styles.options}
          >
            <Pressable
              onPress={() => navigation.navigate('Register')}
            >
              <View>
                <Text
                  style={styles.register}
                >Create an account</Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => console.log('go to Reset Password Screen')}
            >
              <View>
                <Text>Forgot password?</Text>
              </View>
            </Pressable>

          </View>

          <Pressable
            onPress={() => navigation.navigate('Home')}
          >
            {/* the View is needed to style the area around the text and Pressable only handles onPress */}
            <View
              style={styles.button}
            >
              <Text
                style={styles.buttonText}
              >Log in</Text>
            </View>
          </Pressable>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login
