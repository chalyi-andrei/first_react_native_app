import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class RegistrationPage extends React.Component {
  static navigationOptions = {
    title: 'Registration',
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <TextInput
          style={styles.input}
          placeholder="Имя"
          onChangeText={(name) => this.setState({name})}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fefefe',
    paddingTop: 30,
  },
  input: {
    borderWidth: 0.5,
    padding: 3,
    height: 40,
    width: 300,
    borderColor: '#d6d7da',
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
  }
});
