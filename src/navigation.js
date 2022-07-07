import React from 'react';
import {/* View, Text, */ Button /* TouchableOpacity */} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './pages/Login/LoginScreen';
import HomeScreen from './pages/Home/HomeScreen';
import DetailScreen from './pages/Detail/DetailScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          headerMode="none"
          component={LoginScreen}
          options={{
            title: '登录页',
            headerShown: false, // 不显示标题
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页',
            headerShown: false,
          }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
