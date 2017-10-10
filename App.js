import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RegistrationPage from './app/registration-page/RegistrationPage';
import LoginPage from './app/login-page/LoginPage';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    let pic = {
     uri: 'https://lh3.googleusercontent.com/Yh6ZlCb8dQIDIwAWbwd2jboFCyTqq8wc2xbLMs9ykYemOX3vjOTtT6Npfbk-jFkCciwY=w300'
   };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello user!</Text>
        <Text style={styles.titleBig}>Register in our application</Text>
         <Image source={pic} style={styles.img}/>
        <Button
          onPress={() => navigate('Registr')}
          title='Go Registration'/>
        <Button
          onPress={() => navigate('Login')}
          title='Go Login'/>
      </View>
    );
  }
}

 const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Registr: { screen: RegistrationPage },
  Login: { screen: LoginPage },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
  },
  titleBig: {
    marginBottom: 30,
    fontSize: 20,
  },
  img: {
    width: 183,
    height: 110
   }
});
