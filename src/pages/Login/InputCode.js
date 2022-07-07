import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearBtn from '~/components/LinearBtn';
// import {Button} from '@rneui/base';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {px2dp} from '~/utils/screenKits';
import {isPhone} from '~/utils/validator';

class InputCode extends Component {
  render() {
    const {phoneNum = ''} = this.props;
    console.log('111', this.props);
    return (
      <View style={styles.loginWare}>
        <Text style={styles.loginTitle}>请输入6位验证码</Text>
        <Text style={styles.loginTitleDesc}>已发送到：+86 {phoneNum}</Text>
        {/* <View style={styles.loginInputWare}>
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
        </View> */}
        <LinearBtn
          onPress={this.completeInput}
          style={{width: px2dp(280), height: px2dp(50)}}
          textMsg="重新获取验证码"
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
  loginTitleDesc: {
    marginTop: px2dp(10),
  },
  loginInputWare: {
    marginTop: px2dp(30),
  },
});

export default InputCode;
