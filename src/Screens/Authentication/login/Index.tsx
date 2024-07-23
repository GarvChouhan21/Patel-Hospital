import React from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {styles} from './style';
import {AppLogo} from '../../../../assets/images';
import {InputField} from '../../../commonComponents/InputField';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import CommonButton from '../../../commonComponents/commonButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../../utils/Screens';

const LoginScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation=useNavigation<NavigationProp<any>>()
  const onSubmit = (data: any) => {
    console.log(data);
    Alert.alert('Form Data', JSON.stringify(data));
    navigation.navigate(SCREEN_NAME.SELECT_SCREEN)
  };

  return (
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
            name: 'email',
            control,
            // rules: RULEs.Required,
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
            // rules: RULEs.Required,
          }}
        />
        <View style={styles.forgetContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('otpScreen')}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('forgot')}> */}
            <Text style={styles.forgetText}>
              {SCREEN_CONSTANTS.LOGIN.FORGET_PASSWORD}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            onPress={handleSubmit(onSubmit)}
            disable={false}
            isSelected={true}
            buttonText={SCREEN_CONSTANTS.LOGIN.LOGIN}
            isLoading={false}
          />
        </View>
      </View>
      <View style={{flex: 1}} />
    </SafeAreaView>
  );
};

export default LoginScreen;
