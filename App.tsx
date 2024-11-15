import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import {COLORS} from './src/utils/Colors';
import ToastMessage from './src/commonComponents/CommonToastMessage';

const App = () => {
  useEffect(() => {
    setTimeout(()=> {
      if (Platform.OS == 'android') {
        SplashScreen.hide();
      }
    },1000)
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.APPBACK_GROUND}
      />
      <NavigationContainer>
        <RootNavigation />
        {ToastMessage()}
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
});
