import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {styles} from './style';
import {AppLogo} from '../../../../assets/images';
import {InputField} from '../../../commonComponents/InputField';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import CommonButton from '../../../commonComponents/commonButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '../../../utils/Screens';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RULES} from '../../../utils/rules';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import { login } from '../../../services/userApi';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const saveCredentials = async (token: any, isLoggedIn: any) => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    } catch (error) {
      console.error('Error saving data in AsyncStorage', error);
    }
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      setLoading(true);
      const result = await login(data.identifier.trim(), data.password.trim());
      console.log('loginResp=======', result);
      if (result.accessToken) {
        await saveCredentials(result.accessToken, true);
          Toast.show({
            type: 'success',
            text1: 'Login Successful!',
            position: 'bottom',
            visibilityTime: 1500,
          });
          navigation.navigate(SCREEN_NAME.SELECT_SCREEN);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          position: 'bottom',
          visibilityTime: 1500,
          swipeable: true,
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        position: 'bottom',
        visibilityTime: 1500,
        swipeable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const FooterContainer = () => {
    return (
      !loading && (
        <View style={styles.buttonContainer}>
          <CommonButton
            onPress={handleSubmit(onSubmit)}
            disable={false}
            isSelected={true}
            buttonText={SCREEN_CONSTANTS.LOGIN.LOGIN}
            isLoading={loading}
          />
        </View>
      )
    );
  };

  return (
    <KeyboardAvoidingScrollView
      containerStyle={styles.scrollContainer}
      stickyFooter={FooterContainer()}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 0.2}} />
        <View style={styles.appLogoContainer}>
          <AppLogo />
        </View>
        <View style={styles.mainContainer}>
          <InputField
            {...{
              multiline: false,
              label: `${SCREEN_CONSTANTS.LOGIN.EMAIL}`,
              inputlabel: `${SCREEN_CONSTANTS.LOGIN.EMAIL_PLACEHOLDER}`,
              name: 'identifier',
              control,
              rules: {required: RULES.Required},
            }}
          />
          <InputField
            {...{
              multiline: false,
              label: `${SCREEN_CONSTANTS.LOGIN.PASSWORD}`,
              inputlabel: `${SCREEN_CONSTANTS.LOGIN.PASSWORD_PLACEHOLDER}`,
              name: 'password',
              control,
              secureTextEntry: true,
              rules: {required: RULES.PASSWORD},
            }}
          />
          <View style={styles.forgetContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('forgot')}>
              <Text style={styles.forgetText}>
                {SCREEN_CONSTANTS.LOGIN.FORGET_PASSWORD}
              </Text>
            </TouchableOpacity>
          </View>
          {/* {loading && <ActivityIndicator size="large" color="#0F6EFD" />} */}
        </View>
        <View style={{flex: 1}} />
      </SafeAreaView>
    </KeyboardAvoidingScrollView>
  );
};

export default LoginScreen;
