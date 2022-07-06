import {View, Text, Button} from 'react-native';
import React from 'react';

export default function DetailScreen({route, navigation}) {
  const {itemId = '', otherParam = ''} = route.params || {};

  const goHome = () => {
    console.log(45646546546);
    navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>详情页面</Text>
      <Text>itemId: {itemId && JSON.stringify(itemId)}</Text>
      <Text>otherParam: {otherParam && JSON.stringify(otherParam)}</Text>
      <Button
        title="继续查看详情"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="返回首页" onPress={goHome} />
      <Button title="返回上个页面" onPress={() => navigation.goBack()} />
    </View>
  );
}
