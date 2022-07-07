import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';
import InputPhone from './InputPhone';
import InputCode from './InputCode';
import Loading from '~/components/Loading';
import Svg from '~/components/Svg';
import Code from './Code';

import {px2dp} from '~/utils/screenKits';

export default class LoginScreen extends Component {
  state = {
    isLoading: false,
    phoneNum: '123',
    status: 'phone', // phone-输入手机号 code-输入验证码
  };

  changeStatus = (data = {}) => {
    const {phoneNum = ''} = (data = {});
    this.setState({
      status: 'code',
      phoneNum,
    });
  };

  render() {
    const {status = '', phoneNum = '', isLoading = false} = this.state;

    return (
      <SafeAreaView>
        <View style={styles.logoWare}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <Image style={styles.logo} source={require('~/assets/img/cat.jpg')} />
          <View>
            {status === 'phone' ? (
              <InputPhone changeStatus={this.changeStatus} />
            ) : (
              <Code />
              // <InputCode phoneNum={phoneNum} />
            )}
          </View>
          <Loading isLoading={isLoading} />
          <Svg icon="male" size={px2dp(45)} style={styles.writeBtn} />
          <Svg icon="female" size={px2dp(45)} style={styles.writeBtn} />
        </View>
      </SafeAreaView>
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
  loginWare: {
    padding: px2dp(15),
  },
  loginTitle: {
    fontSize: px2dp(25),
    color: '#888',
    fontWeight: 'bold',
  },
  loginInputWare: {
    marginTop: px2dp(30),
  },
});
