import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearBtn from '~/components/LinearBtn';
// import {Button} from '@rneui/base';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Loading from '~/components/Loading';
import {px2dp} from '~/utils/screenKits';
import {isPhone} from '~/utils/validator';
import Code from './Code';

class InputCode extends Component {
  constructor(props) {
    super(props);
    // this.CodeRef = React.createRef();
  }

  state = {
    seconds: 5,
    btnText: '重新获取验证码',
    isCountDowning: false,
    isLoading: true,
  };

  completeInput = () => {
    this.countDown();
    // console.log('CodeRef=', this.CodeRef.current);
    // this.CodeRef.resetVal();
  };

  countDown = () => {
    this.setState({
      isLoading: true,
    });
    let seconds = 5;
    let timer = setInterval(() => {
      seconds--;
      this.setState({
        isLoading: false,
        btnText: `重新获取(${seconds}s)`,
        isCountDowning: true,
      });
      if (seconds <= 0) {
        clearInterval(timer);
        this.setState({
          btnText: '重新获取验证码',
          isCountDowning: false,
        });
      }
    }, 1000);
  };

  // 获取输入的验证码
  getCodeVal = val => {
    console.log('val===', val);
    // 3、发送给后端
    // 4、根据返回值判断是新旧用户，新用户-完善个人信息页面 老用户-首页

    // 路由跳转-完善个人信息页面
    this.props.navigation.navigate('UserInfo');
  };

  render() {
    const {phoneNum = ''} = this.props;
    const {
      btnText = '',
      isCountDowning = false,
      isLoading = false,
    } = this.state;
    return (
      <View style={styles.loginWare}>
        <Text style={styles.loginTitle}>请输入6位验证码</Text>
        <Text style={styles.loginTitleDesc}>已发送到：+86 {phoneNum}</Text>
        <Code getCodeVal={this.getCodeVal} />
        <LinearBtn
          disabled={isCountDowning}
          onPress={this.completeInput}
          style={{width: px2dp(280), height: px2dp(50)}}
          textMsg={btnText}
        />
        <Loading isLoading={isLoading} />
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
