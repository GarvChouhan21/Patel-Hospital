import React, {useRef, useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import OTPTextView from 'react-native-otp-textinput';
import CommonButton from '../../../commonComponents/commonButton';
import {useNavigation} from '@react-navigation/native';
import ChangePasswordScreen from '../changePassword';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import { SCREEN_CONSTANTS } from '../../../utils/screenConstants';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState();
  const handleOtpChange = text => {
    console.log(text);
    setOtp(text);
  };

  const ref = useRef();

  return (
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
            inputCount={5}
            keyboardType="numeric"
            textInputStyle={{
              padding: 10,
              backgroundColor: '#F0F0F0',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#0F6EFD',
              marginHorizontal: 9,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text>Didn’t Receive the OTP?</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.text}> Resend OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            // onPress={navigation.navigate('changePassword')}
            disable={false}
            isSelected={true}
            buttonText={SCREEN_CONSTANTS.OTPVERIFICATION.CONTINUE}
            isLoading={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
