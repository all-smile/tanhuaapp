import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

class Loading extends Component {
  render() {
    const {loadingStatus = true, loadingColor = '#6495ED'} = this.props;

    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator
          size="large"
          color={loadingColor}
          animating={loadingStatus}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loading;
