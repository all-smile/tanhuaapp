import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  ToastAndroid,
  Button,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';
// import {Dialog, Overlay} from '@rneui/themed';
import React, {Component} from 'react';
import Login from '~/components/Login';
import Loading from '~/components/Loading';
import MyToast from '~/components/Toast';
import Svg from '~/components/Svg';
import LinearBtn from '~/components/LinearBtn';
// import AppNavigator from '~/navigation';
import {px2dp} from '~/utils/screenKits';

MyToast.show({message: '提示信息'});

// import {testApi} from '~/api/index';

// testApi()
//   .then((res) => console.log('res=======', res))
//   .catch(err => {
//     console.log('err======', err);
//   });

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
      <View style={styles.logoWare}>
        {/* <AppNavigator /> */}
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image style={styles.logo} source={require('~/assets/img/cat.jpg')} />
        <Login />
        <Loading isLoading={isLoading} />
        {/* <ActivityIndicator size="small" color="#0000ff" animating={true} /> */}
        {/* <StatusBar backgroundColor="#ccc" translucent={true} /> */}
        <Svg icon="male" size={px2dp(45)} style={styles.writeBtn} />
        <Svg icon="female" size={px2dp(45)} style={styles.writeBtn} />
        <LinearBtn
          style={{width: px2dp(300), height: px2dp(50)}}
          textMsg="获取验证码"
        />
        {/* <Dialog isVisible={true}>
          <Dialog.Title title="Dialog Title" />
          <Text>Dialog body text. Add relevant information here.</Text>
        </Dialog> */}
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
