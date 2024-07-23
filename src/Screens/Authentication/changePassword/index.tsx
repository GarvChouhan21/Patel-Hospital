import React from 'react';
import {
  SafeAreaView,
  View,
  Alert,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {InputField} from '../../../commonComponents/InputField';
import {styles} from './styles';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import CommonButton from '../../../commonComponents/commonButton';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import {useNavigation} from '@react-navigation/native';

const ChangePasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <HeaderComponent
          isLeftIcon={true}
          isCenterText={true}
          centerText={SCREEN_CONSTANTS.CHANGEPASSWORD.HEADING}
        />
        <View style={styles.container}>
          <InputField
            {...{
              multiline: false,
              label: `${SCREEN_CONSTANTS.CHANGEPASSWORD.NEWPASSWORD}`,
              inputlabel: `${SCREEN_CONSTANTS.CHANGEPASSWORD.NEWPASSWORD_PLACEHOLDER}`,
              name: 'password',
              control,
              // rules: RULEs.Required,
            }}
          />
          <InputField
            {...{
              multiline: false,
              label: `${SCREEN_CONSTANTS.CHANGEPASSWORD.CONFIRMPASSWORD}`,
              inputlabel: `${SCREEN_CONSTANTS.CHANGEPASSWORD.CONFIRMPASSWORDPLACEHOLDER}`,
              name: 'confirmPassword',
              control,
              // rules: RULEs.Required,
            }}
          />
          <View style={styles.buttonContainer}>
            <CommonButton
              onPress={handleSubmit(onSubmit)}
              disable={false}
              isSelected={true}
              buttonText={SCREEN_CONSTANTS.CHANGEPASSWORD.CONTINUE}
              isLoading={false}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
