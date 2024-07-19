import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationConstant } from '../utils/Screens';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
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
        {
          NavigationConstant.map((item,index)=>{
            return (
              <Stack.Screen
              key={index}
                name={item.name}
                component={item.component}
                options={{title: 'Welcome'}}
              />
            )
          })
        }
    </Stack.Navigator>
  );
};

export default RootNavigation;
