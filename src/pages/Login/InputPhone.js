import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
// import { Button } from 'react-native-elements';
import {Button, ThemeProvider, Input} from '@rneui/themed';
import LinearBtn from '~/components/LinearBtn';
// import {Button} from '@rneui/base';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {px2dp} from '~/utils/screenKits';
import {isPhone} from '~/utils/validator';

export default class InputPhone extends Component {
  state = {
    phoneNum: '15615615615',
    errMsg: '',
  };

  phoneNumChange = text => {
    console.log(text);
    this.setState({
      phoneNum: text,
    });
  };

  completeInput = () => {
    const {phoneNum = ''} = this.state;
    console.log('输入完成', phoneNum);
    if (!isPhone(phoneNum)) {
      this.setState({
        errMsg: '手机号码格式不正确',
      });
      return;
    } else {
      this.setState({
        errMsg: '',
      });
    }

    // 获取验证码

    // 切换输入验证码的界面, 倒计时开始
    const {changeStatus = null} = this.props;
    changeStatus && changeStatus({phoneNum: phoneNum});
  };

  render() {
    const {phoneNum = '', errMsg = ''} = this.state;

    return (
      <View style={styles.loginWare}>
        <Text style={styles.loginTitle}>手机号登录注册</Text>
        <View style={styles.loginInputWare}>
          <Input
            placeholder="输入手机号码"
            maxLength={11}
            keyboardType="phone-pad"
            value={phoneNum}
            inputStyle={{color: '#333'}}
            onChangeText={this.phoneNumChange}
            errorMessage={errMsg}
            onSubmitEditing={this.completeInput}
            leftIcon={{
              type: 'font-awesome',
              name: 'phone',
              color: '#ccc',
              size: px2dp(20),
            }}
          />
        </View>
        <LinearBtn
          onPress={this.completeInput}
          style={{width: px2dp(280), height: px2dp(50)}}
          textMsg="获取验证码"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
