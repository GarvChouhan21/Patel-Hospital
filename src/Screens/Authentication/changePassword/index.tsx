import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { InputField } from '../../../commonComponents/InputField';
import { styles } from './styles';
import { SCREEN_CONSTANTS } from '../../../utils/screenConstants';
import CommonButton from '../../../commonComponents/commonButton';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import { useNavigation } from '@react-navigation/native';

const ChangePasswordScreen = ({
  message,
  currentPassword,
  currentPasswordPlaceholder,
  forgotPassword
}: any) => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <HeaderComponent
          isLeftIcon={true}
          isCenterText={true}
          centerText={SCREEN_CONSTANTS.CHANGEPASSWORD.HEADING}
        />
        <View style={styles.container}>
          {message && (
            <View style={styles.textView}>
              <Text style={styles.text}>{message}</Text>
            </View>
          )}
          {message && (
            <InputField
              multiline={false}
              label={`${currentPassword}`}
              inputlabel={`${currentPasswordPlaceholder}`}
              name="currentpassword"
              control={control}
            />
          )}
          <InputField
            multiline={false}
            label={`${SCREEN_CONSTANTS.CHANGEPASSWORD.NEW_PASSWORD}`}
            inputlabel={`${SCREEN_CONSTANTS.CHANGEPASSWORD.NEW_PASSWORD_PLACEHOLDER}`}
            name="password"
            control={control}
          />
          <InputField
            multiline={false}
            label={`${SCREEN_CONSTANTS.CHANGEPASSWORD.CONFIRM_PASSWORD}`}
            inputlabel={`${SCREEN_CONSTANTS.CHANGEPASSWORD.CONFIRM_PASSWORD_PLACEHOLDER}`}
            name="confirmPassword"
            control={control}
          />
          {forgotPassword && (
              <TouchableOpacity>
                <Text style={styles.btnText}>{forgotPassword}</Text>
              </TouchableOpacity>
          )}
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
