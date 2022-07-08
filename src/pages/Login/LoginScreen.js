import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
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

  componentDidMount() {
    // console.log('InputCode', this.InputCode);
  }

  // 切换到输入验证码界面，并执行倒计时
  changeStatus = (data = {}) => {
    const {phoneNum = ''} = (data = {});
    this.setState(
      state => ({
        status: 'code',
        phoneNum,
      }),
      () => {
        this.InputCode.countDown();
      },
    );
  };

  render() {
    const {status = '', phoneNum = '', isLoading = false} = this.state;

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
          keyboardVerticalOffset={px2dp(200)}>
          <View style={styles.logoWare}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <Image
              style={styles.logo}
              source={require('~/assets/img/cat.jpg')}
            />
            {status === 'phone' ? (
              <InputPhone changeStatus={this.changeStatus} />
            ) : (
              <InputCode
                phoneNum={phoneNum}
                ref={node => (this.InputCode = node)}
              />
            )}
            <Loading isLoading={isLoading} />
            {/* <Svg icon="male" size={px2dp(45)} style={styles.writeBtn} />
          <Svg icon="female" size={px2dp(45)} style={styles.writeBtn} /> */}
          </View>
          <StatusBar backgroundColor="transparent" translucent={true} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  logoWare: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  logo: {
    flex: 0.5,
    width: '100%',
    minHeight: px2dp(300),
  },
});
