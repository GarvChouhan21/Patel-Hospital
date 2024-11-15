import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {InputField} from '../../../commonComponents/InputField';
import {styles} from './styles';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import CommonButton from '../../../commonComponents/commonButton';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {SCREEN_NAME} from '../../../utils/Screens';
import {RULES} from '../../../utils/rules';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {changePasswordApi, ResetPasswordApi} from '../../../services/userApi';
import Toast from 'react-native-toast-message';

const ChangePasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });
  const navigation = useNavigation<NavigationProp<any>>();
  const route: any = useRoute();
  const [loading, setLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const Password = watch('newPassword');

  useEffect(() => {
    if (route.params?.forgot) {
      setIsForgotPassword(true);
    }
  }, [route.params?.forgot]);

  const changePasswordApiCall = async (data: any) => {
    try {
      setLoading(true);
      const result = await changePasswordApi(
        data.currentPassword.trim(),
        data.confirmPassword.trim(),
      );
      if (result?.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Your password has been updated.',
          position: 'bottom',
          visibilityTime: 1000,
        });
        navigation.navigate(SCREEN_NAME.LOGIN);
      } else {
        Toast.show({
          type: 'error',
          text1: 'current password is incorrect.',
          position: 'bottom',
          visibilityTime: 1000,
          swipeable: true,
        });
      }
    } catch (error) {
      console.log('Error in change password', error);
    } finally {
      setLoading(false);
    }
  };

  const resetPasswordApiCall = async (data: any) => {
    try {
      setLoading(true);
      const result = await ResetPasswordApi(
        data.confirmPassword.trim(),
        route.params.token,
      );
      if (result?.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Your password reset successfully.',
          position: 'bottom',
          visibilityTime: 1000,
        });
        navigation.navigate(SCREEN_NAME.LOGIN);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Invalid or expired token',
          position: 'bottom',
          visibilityTime: 1000,
          swipeable: true,
        });
      }
    } catch (error) {
      console.log('Error in reset password', error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data: any) => {
    if (isForgotPassword) {
      resetPasswordApiCall(data);
    } else {
      changePasswordApiCall(data);
    }
  };

  const FooterContainer = () => {
    return (
      <View style={styles.buttonContainer}>
        <CommonButton
          onPress={handleSubmit(onSubmit)}
          disable={false}
          isSelected={true}
          buttonText={SCREEN_CONSTANTS.CHANGEPASSWORD.CONTINUE}
          isLoading={loading}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingScrollView
    containerStyle={styles.scrollContainer}
    stickyFooter={FooterContainer()}
    showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.safeArea}>
      <HeaderComponent
        isLeftIcon={true}
        isCenterText={true}
        centerText={SCREEN_CONSTANTS.CHANGEPASSWORD.HEADING}
      />
        <View style={styles.container}>
            {!isForgotPassword && (
              <View style={styles.textView}>
                <Text style={styles.text}>
                  {SCREEN_CONSTANTS.CHANGEPASSWORD.MSG}
                </Text>
              </View>
            )}
            {!isForgotPassword && (
              <InputField
                {...{
                  multiline: false,
                  label: `${SCREEN_CONSTANTS.CHANGEPASSWORD.CURRENT_PASSWORD}`,
                  inputlabel: `${SCREEN_CONSTANTS.CHANGEPASSWORD.CURRENT_PASSWORD_PLACEHOLDER}`,
                  name: 'currentPassword',
                  control,
                  rules: {required: RULES.CURRENT_PASSWORD},
                }}
              />
            )}
            <InputField
              {...{
                multiline: false,
                label: `${SCREEN_CONSTANTS.CHANGEPASSWORD.NEW_PASSWORD}`,
                inputlabel: `${SCREEN_CONSTANTS.CHANGEPASSWORD.NEW_PASSWORD_PLACEHOLDER}`,
                name: 'newPassword',
                secureTextEntry: true,
                control,
                rules: {required: RULES.NEW_PASSWORD},
              }}
            />
            <InputField
              {...{
                multiline: false,
                label: `${SCREEN_CONSTANTS.CHANGEPASSWORD.CONFIRM_PASSWORD}`,
                inputlabel: `${SCREEN_CONSTANTS.CHANGEPASSWORD.CONFIRM_PASSWORD_PLACEHOLDER}`,
                name: 'confirmPassword',
                control,
                secureTextEntry: true,
                rules: {
                  ...RULES.CONFIRM_NEW_PASSWORD,
                  validate: (value: string) =>
                    value === Password || RULES.CONFIRM_NEW_PASSWORD.notMatch,
                },
              }}
            />
            {!isForgotPassword && (
              <TouchableOpacity onPress={() => navigation.navigate('forgot')}>
                <Text style={styles.btnText}>
                  {SCREEN_CONSTANTS.CHANGEPASSWORD.FORGOT_PASSWORD}
                </Text>
              </TouchableOpacity>
            )}
          {loading && <ActivityIndicator size="large" color="#0F6EFD" />}
        </View>
    </SafeAreaView>
    </KeyboardAvoidingScrollView>
  );
};

export default ChangePasswordScreen;
