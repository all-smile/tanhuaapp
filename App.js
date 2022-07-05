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
import Toast from '~/components/Toast';
import Svg from '~/components/Svg';
// import AppNavigator from '~/navigation';
import {px2dp} from '~/utils/screenKits';

// const Toast = ({visible, message}) => {
//   console.log(visible, message);
//   if (visible) {
//     ToastAndroid.showWithGravityAndOffset(
//       message + '565656',
//       ToastAndroid.LONG,
//       ToastAndroid.TOP,
//       ToastAndroid.CENTER,
//       25,
//       50,
//     );
//     return null;
//   }
//   return null;
// };
export default class App extends Component {
  state = {
    visibleToast: false,
    isLoading: false,
  };

  handleToast = () => {
    this.setState({
      visibleToast: true,
    });
  };

  toggleDialog1 = () => {
    console.log(1111);
  };

  render() {
    const {visibleToast = false, isLoading} = this.state;
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
        <Toast visible={visibleToast} message="自定义提示信息" />
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
