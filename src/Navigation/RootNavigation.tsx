import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationConstant, SCREEN_NAME } from '../utils/Screens';


const Stack = createStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator 
    initialRouteName={SCREEN_NAME.LOGIN}
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
