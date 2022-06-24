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
} from 'react-native';
import {Dialog, Overlay} from '@rneui/themed';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React, {Component} from 'react';
import Login from './src/components/Login';
import Loading from './src/components/Loading';
// import AppNavigator from './src/navigation';
import {px2dp} from './src/utils/screenKits';

const Toast = ({visible, message}) => {
  console.log(visible, message);
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50,
    );
    return null;
  }
  return null;
};
export default class App extends Component {
  state = {
    visibleToast: false,
  };

  handleButtonPress = () => {
    this.setState({
      visibleToast: true,
    });
    console.log(12);
  };

  toggleDialog1 = () => {
    console.log(1111);
  };

  render() {
    const {visibleToast = false} = this.state;
    console.log('visibleToast=', visibleToast);
    return (
      <View style={styles.logoWare}>
        {/* <AppNavigator /> */}
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image
          style={styles.logo}
          source={require('./src/assets/img/cat.jpg')}
        />
        <Login />
        <Loading animating={true} loadingColor="red" />
        {/* <ActivityIndicator size="small" color="#0000ff" animating={true} /> */}
        <Overlay isVisible={true}>
          <Text>App</Text>
          <Icon name="rocket" size={30} color="#900" />
        </Overlay>
        <Toast visible={visibleToast} message="Example" />
        <Button title="Toggle Toast" onPress={this.handleButtonPress} />
        <Button
          title="测试"
          onPress={() => ToastAndroid.show('我是悬浮窗信息', 20000)}
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
