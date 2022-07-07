import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearBtn from '~/components/LinearBtn';
// import {Button} from '@rneui/base';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {px2dp} from '~/utils/screenKits';
import {isPhone} from '~/utils/validator';
import Code from './Code';

class InputCode extends Component {
  state = {
    seconds: 5,
    btnText: '重新获取验证码',
  };

  componentDidMount() {
    // this.countDown();
  }

  countDown = () => {
    let seconds = 5;
    let timer = setInterval(() => {
      seconds--;
      this.setState({
        btnText: `重新获取(${seconds}s)`,
      });
      if (seconds <= 0) {
        clearInterval(timer);
        this.setState({
          btnText: '重新获取验证码',
        });
      }
    }, 1000);
  };

  render() {
    const {phoneNum = ''} = this.props;
    const {btnText = ''} = this.state;
    console.log('111', this.props);
    return (
      <View style={styles.loginWare}>
        <Text style={styles.loginTitle}>请输入6位验证码</Text>
        <Text style={styles.loginTitleDesc}>已发送到：+86 {phoneNum}</Text>
        <Code />
        <LinearBtn
          onPress={this.completeInput}
          style={{width: px2dp(280), height: px2dp(50)}}
          textMsg={btnText}
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
