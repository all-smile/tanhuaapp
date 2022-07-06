import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {px2dp} from '~/utils/screenKits';

export default class LinearBtn extends Component {
  // props默认值
  static defaultProps = {
    style: {},
    textStyle: {},
    colors: ['#9b63cd', '#e0708c'], // 水平渐变色
    textMsg: '按钮',
  };
  render() {
    const {style = {}, textStyle = {}, colors = [], textMsg = ''} = this.props;
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          alignSelf: 'center',
          ...style,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors}
          style={styles.linearGradient}>
          <Text style={{...styles.buttonText, ...textStyle}}>{textMsg}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: px2dp(15),
    paddingRight: px2dp(15),
    borderRadius: px2dp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: px2dp(18),
    fontFamily: 'Gill Sans',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
