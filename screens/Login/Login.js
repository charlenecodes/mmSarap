import { Text, View, TextInput, Pressable, SafeAreaView, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Login.styles';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';


// enable focus and submit on enter
function Login() {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(login)
  }

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
          {/* <Text
            style={styles.title}
          >Login</Text> */}

          <Text
            style={styles.label}
          >Username</Text>
          <TextInput
            name='email'
            value={login.username}
            onChange={handleChange}
            style={styles.input}
            placeholder='username'
          />

          <Text
            style={styles.label}
          >Password</Text>
          <TextInput
            name='email'
            value={login.password}
            onChange={handleChange}
            style={styles.input}
            secureTextEntry={true}
            textContentType='password'
            placeholder='password'
          />
          <View
            style={styles.options}
          >
            <Pressable
              onPress={() => navigation.navigate("Register")}
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

          <CustomButton 
            text={'Log in'}
            onPress={(e) => handleSubmit}
          />
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login
