import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {InputField} from '../../../commonComponents/InputField';
import {styles} from './styles';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import CommonButton from '../../../commonComponents/commonButton';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '../../../utils/Screens';
import {RULES} from '../../../utils/rules';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {EmailVerificationApi} from '../../../services/userApi';
import Toast from 'react-native-toast-message';

const ForgotPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      identifier: '',
    },
  });
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const result: any = await EmailVerificationApi(data.identifier.trim());
      if (result.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Reset password link or OTP sent successfully',
          position: 'bottom',
          visibilityTime: 1000,
        });
        navigation.navigate(SCREEN_NAME.OTP_SCREEN, {identifier: data.identifier});
      } else {
        Toast.show({
          type: 'error',
          text1: 'User not found',
          position: 'bottom',
          visibilityTime: 1000,
          swipeable: true,
        });
      }
    } catch (error) {
      console.log('Error in forgot password', error);
    } finally {
      setLoading(false);
    }
  };

  const FooterContainer = () => {
    return (
      <View style={styles.buttonContainer}>
        <CommonButton
          onPress={handleSubmit(onSubmit)}
          disable={false}
          isSelected={true}
          buttonText={SCREEN_CONSTANTS.FORGOTPASSWORD.CONTINUE}
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
          centerText={SCREEN_CONSTANTS.FORGOTPASSWORD.HEADING}
        />
        <View style={styles.container}>
          <InputField
            {...{
              multiline: false,
              label: `${SCREEN_CONSTANTS.FORGOTPASSWORD.EMAIL}`,
              inputlabel: `${SCREEN_CONSTANTS.FORGOTPASSWORD.EMAIL_PLACEHOLDER}`,
              name: 'identifier',
              control,
              rules: RULES.EMAIL,
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingScrollView>
  );
};

export default ForgotPasswordScreen;
