import {Text, View, SafeAreaView, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Register.styles';
import CustomButton from '../../components/CustomButton/CustomButton';

const Register = () => {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (name, text) => {
    setRegister({
      ...register,
      [name]: text,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            name="name"
            value={register.name}
            onChangeText={text => handleChange('name', text)}
            style={styles.input}
            placeholder="name"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            name="email"
            value={register.email}
            onChangeText={text => handleChange('email', text)}
            style={styles.input}
            placeholder="email"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Text style={styles.label}>Username</Text>
          <TextInput
            name="username"
            value={register.username}
            onChangeText={text => handleChange('username', text)}
            style={styles.input}
            placeholder="username"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            name="password"
            value={register.password}
            onChangeText={text => handleChange('password', text)}
            style={styles.input}
            secureTextEntry={true}
            textContentType="password"
            placeholder="password"
          />

          <CustomButton
            text={'Register'}
            onPress={navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
