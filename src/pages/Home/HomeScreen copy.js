import {View, Text, Button} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>首页</Text>
      <Button
        title="查看详情"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button
        title="更新标题"
        onPress={() =>
          navigation.setOptions({title: 'Updated!', headerTitleAlign: 'center'})
        }
      />
    </View>
  );
}
