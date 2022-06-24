import {Text, View, Image, StyleSheet, StatusBar} from 'react-native';
import React, {Component} from 'react';
import Login from './src/components/Login';
// import AppNavigator from './src/navigation';
import {px2dp} from './src/utils/screenKits';
export default class App extends Component {
  render() {
    return (
      <View style={styles.logoWare}>
        {/* <AppNavigator /> */}
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image
          style={styles.logo}
          source={require('./src/assets/img/cat.jpg')}
        />
        <Login />

        <Text>App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoWare: {
    backgroundColor: 'transparent',
  },
  logo: {
    width: '100%',
    height: px2dp(380),
  },
});
