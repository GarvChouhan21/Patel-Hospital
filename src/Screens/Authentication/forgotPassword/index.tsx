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
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('otpScreen');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <HeaderComponent
          isLeftIcon={true}
          isCenterText={true}
          centerText={SCREEN_CONSTANTS.FORGOTPASSWORD.HEADING}
        />
        <View style={styles.container}>
          <InputField
            {...{
              multiline: false,
              label: `${SCREEN_CONSTANTS.FORGOTPASSWORD.EMAIL}`,
              inputlabel: `${SCREEN_CONSTANTS.FORGOTPASSWORD.EMAIL_PLACEHOLDER}`,
              name: 'email',
              control,
              // rules: RULEs.Required,
            }}
          />

          <View style={styles.buttonContainer}>
            <CommonButton
              onPress={handleSubmit(onSubmit)}
              disable={false}
              isSelected={true}
              buttonText={SCREEN_CONSTANTS.FORGOTPASSWORD.CONTINUE}
              isLoading={false}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
