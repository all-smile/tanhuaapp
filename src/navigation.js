import React from 'react';
import {/* View, Text, */ Button /* TouchableOpacity */} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './pages/Login/LoginScreen';
import HomeScreen from './pages/Home/HomeScreen';
import DetailScreen from './pages/Detail/DetailScreen';
import Code from './pages/Login/Code';

// 测试专用路由组件
import Demo from './pages/Demo';
import Demo01 from './pages/Demo01';

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
            headerShown: false, // 不显示标题
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen
          name="Code"
          component={Code}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Demo"
          component={Demo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Demo01"
          component={Demo01}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
