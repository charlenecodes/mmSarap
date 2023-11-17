import { Text, View, TextInput, Pressable } from 'react-native';
import React from 'react';
import { styles } from './Login.styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >Login</Text>
      <TextInput
        style={styles.input}
        placeholder='e-mail address'
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        textContentType='password'
        placeholder='password'
      />
      <View
        style={styles.options}
      >
        <Pressable
          onPress={() => console.log('go to Register Screen')}
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
        onPress={() => console.log('go to Home Screen')}
      >
        {/* the View is needed to style the area around the text */}
        <View
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >Log in</Text>
        </View>
      </Pressable>
      
      
    </View>
  )
}

export default Login
