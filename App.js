import React, {Component} from 'react';
import MyToast from '~/components/Toast';

import AppNavigator from '~/navigation';

import {version} from 'react-native/package.json';
console.log('version=', version);

MyToast.show({message: '提示信息'});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
