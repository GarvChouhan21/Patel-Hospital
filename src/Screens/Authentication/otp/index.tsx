import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './styles';
import OTPTextView from 'react-native-otp-textinput';
import CommonButton from '../../../commonComponents/commonButton';
import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import { SCREEN_NAME } from '../../../utils/Screens';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import Toast from 'react-native-toast-message';
import { EmailVerificationApi } from '../../../services/userApi';

const OtpScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const routes: any = useRoute();
  
  const handleOtpChange = (text: any) => {
    setOtp(text);
    setIsOtpComplete(text.length === 4);
  };

  const onSubmit = async () => {
    if (isOtpComplete && otp == '1234') {
      navigation.navigate(SCREEN_NAME.CHANGE_PASSWORD, {
        forgot: true,
        token: otp
      });
    }
    else{
      Alert.alert('Incorrect OTP')
    }
  }

  const resendOtp = async () => {
    try {
      setLoading(true);
      const result: any = await EmailVerificationApi(routes.params.identifier);
      if (result.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'OTP sent successfully',
          position: 'bottom',
          visibilityTime: 1000,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: '.......',
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
  }

  const FooterContainer = () => {
    return (
      <View style={styles.buttonContainer}>
      <CommonButton
        onPress={() => onSubmit()}
        disable={!isOtpComplete} 
        isSelected={true}
        buttonText={SCREEN_CONSTANTS.OTPVERIFICATION.CONTINUE}
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
          centerText={SCREEN_CONSTANTS.OTPVERIFICATION.HEADING}
        />
        <View style={styles.container}>
          <View style={styles.otpContainer}>
            <OTPTextView
              handleTextChange={handleOtpChange}
              tintColor="#0F6EFD"
              inputCount={4}
              keyboardType="numeric"
              textInputStyle={{
                padding: 10,
                backgroundColor: '#F0F0F0',
                borderRadius: 10,
                borderWidth: 1,
                marginHorizontal: 9,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <View>
              <Text>{SCREEN_CONSTANTS.OTPVERIFICATION.Text1}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => resendOtp()}>
                <Text style={styles.text}> {SCREEN_CONSTANTS.OTPVERIFICATION.Text2}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </SafeAreaView>
    </KeyboardAvoidingScrollView>
  );
};

export default OtpScreen;
