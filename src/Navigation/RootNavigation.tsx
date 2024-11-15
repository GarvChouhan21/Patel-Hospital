import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationConstant, SCREEN_NAME} from '../utils/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();
const RootNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null); 
  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const isLoggedInString = await AsyncStorage.getItem('isLoggedIn');
        const loggedIn = JSON.parse(isLoggedInString || "false");
        setIsLoggedIn(loggedIn);
      } catch (error) {
        console.error('Error in retriving data from AsyncStorage', error);
        setIsLoggedIn(false); 
      }
    };
    fetchCredentials();
  }, []);

  if (isLoggedIn === null) {
    return <ActivityIndicator size="large" color="#0F6EFD" style={{flex:1,justifyContent:'center',alignItems:'center'}}/>
  }
  return (
    <Stack.Navigator
    initialRouteName={isLoggedIn ? SCREEN_NAME.SELECT_SCREEN : SCREEN_NAME.LOGIN}
      screenOptions={({navigation}) => ({
        headerShown: false,
        cardStyleInterpolator: ({current, layouts}) => ({
          cardStyle: {
            opacity: current.progress,
          },
        }),
        animationEnabled: true,
        gestureDirection: 'horizontal',
        cardStyle: {
          backgroundColor: 'transparent',
        },
        transitionSpec: {
          open: {animation: 'timing', config: {duration: 300, delay: 100}},
          close: {animation: 'timing', config: {duration: 300}},
        },
      })}>
      {NavigationConstant.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{title: 'Welcome'}}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default RootNavigation;
