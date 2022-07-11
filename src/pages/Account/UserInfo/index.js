import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Svg from '~/components/Svg';
import {px2dp} from '~/utils/screenKits';

class UserInfo extends Component {
  state = {
    nickName: '',
    gender: '', // 男 女
    birthday: '2000-06-06',
    city: '',
    lng: '', // 经度
    lat: '', // 纬度
    header: '头像',
    address: '',
  };

  handleGender = gender => {
    this.setState({
      gender,
    });
  };

  render() {
    const {gender = ''} = this.state;
    return (
      <View style={styles.userInfoWare}>
        <Text style={styles.userInfoText}>填写资料</Text>
        <Text style={styles.userInfoText}>提升我的魅力</Text>
        <View style={styles.userInfoIcon}>
          <TouchableOpacity
            onPress={this.handleGender.bind(this, '男')}
            style={{
              ...styles.iconWare,
              backgroundColor: gender === '男' ? 'red' : '#eee',
            }}>
            <Svg icon="male" size={px2dp(45)} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleGender.bind(this, '女')}
            style={{
              ...styles.iconWare,
              backgroundColor: gender === '女' ? 'red' : '#eee',
            }}>
            <Svg icon="female" size={px2dp(45)} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userInfoWare: {
    flex: 1,
    backgroundColor: '#fff',
    padding: px2dp(20),
  },
  userInfoText: {
    fontSize: px2dp(20),
    color: '#666',
    fontWeight: 'bold',
  },
  userInfoIcon: {
    width: '60%',
    marginTop: px2dp(20),
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  iconWare: {
    width: px2dp(60),
    height: px2dp(60),
    borderRadius: 30,
    // borderColor: 'red',
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
});

export default UserInfo;
