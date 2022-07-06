import React, {Component} from 'react';
import {StyleSheet, ToastAndroid} from 'react-native';

// class Toast extends Component {
//   render() {
//     const {visible = false, message = '', delay = 1000} = this.props;
//     if (visible) {
//       ToastAndroid.showWithGravity(
//         message,
//         delay,
//         ToastAndroid.SHORT,
//         ToastAndroid.CENTER,
//       );
//       return null;
//     }
//     return null;
//   }
// }

const styles = StyleSheet.create({});
class MyToast {
  constructor() {}
  show({message}) {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }
}

export default new MyToast();
