import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/Navigation/RootNavigation';
import HeaderComponent from './src/commonComponents/Header';
import Test from './src/commonComponents/Header/Test';
import BottomSheet from './src/commonComponents/Header/BottomSheet';


const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <RootNavigation /> */}
        <Test />
        {/* <BottomSheet /> */}
      </NavigationContainer> 
      {/* <HeaderComponent />*/}
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
