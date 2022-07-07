import {View, Image, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import Loading from '~/components/Loading';
import MyToast from '~/components/Toast';
import Svg from '~/components/Svg';

import LoginScreen from '~/pages/Login/LoginScreen';
import AppNavigator from '~/navigation';
import {px2dp} from '~/utils/screenKits';

import {version} from 'react-native/package.json';
console.log('version=', version);

MyToast.show({message: '提示信息'});

export default class App extends Component {
  state = {
    isLoading: false,
  };

  toggleDialog1 = () => {
    console.log(1111);
  };

  render() {
    const {isLoading} = this.state;
    return (
      <AppNavigator />
      // <SafeAreaView>
      //   <View style={styles.logoWare}>
      //     <StatusBar backgroundColor="transparent" translucent={true} />
      //     <Image style={styles.logo} source={require('~/assets/img/cat.jpg')} />
      //     <Loading isLoading={isLoading} />
      //     <Svg icon="male" size={px2dp(45)} style={styles.writeBtn} />
      //     <Svg icon="female" size={px2dp(45)} style={styles.writeBtn} />
      //     <LoginScreen />
      //   </View>
      // </SafeAreaView>
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
