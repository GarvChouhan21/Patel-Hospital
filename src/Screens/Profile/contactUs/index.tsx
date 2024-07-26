import React from 'react';
import {
    SafeAreaView,
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
  } from 'react-native';
  import {useForm} from 'react-hook-form';
  import { InputField } from '../../../commonComponents/InputField';
  import {styles} from './styles';
  import { SCREEN_CONSTANTS } from '../../../utils/screenConstants';
  import CommonButton from '../../../commonComponents/commonButton';
  import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
  import { useNavigation } from '@react-navigation/native';

const ContactUsScreen = () => {
    const {control, handleSubmit} = useForm();
    const navigation = useNavigation();
  
    const onSubmit = (data: any) => {
      console.log(data);
    };
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <HeaderComponent
          isLeftIcon={true}
          isCenterText={true}
          centerText={SCREEN_CONSTANTS.CONTACT_US.HEADING}
        />
        <View style={styles.container}>
            <InputField
              multiline={false}
              label={`${SCREEN_CONSTANTS.CONTACT_US.FULL_NAME}`}
              inputlabel={`${SCREEN_CONSTANTS.CONTACT_US.FULL_NAME_PLACEHOLDER}`}
              name="fullName"
              control={control}
            />
          <InputField
            multiline={false}
            label={`${SCREEN_CONSTANTS.CONTACT_US.EMAIL}`}
            inputlabel={`${SCREEN_CONSTANTS.CONTACT_US.EMAIL_PLACEHOLDER}`}
            name="email"
            control={control}
          />
          <InputField
            multiline={false}
            label={`${SCREEN_CONSTANTS.CONTACT_US.SUBJECT}`}
            inputlabel={`${SCREEN_CONSTANTS.CONTACT_US.SUBJECT_PLACEHOLDER}`}
            name="subject"
            control={control}
          />
           <InputField
            multiline={true}
            label={`${SCREEN_CONSTANTS.CONTACT_US.MESSAGE}`}
            inputlabel={`${SCREEN_CONSTANTS.CONTACT_US.MESSAGE_PLACEHOLDER}`}
            name="message"
            control={control}
          />
           <View style={styles.buttonContainer}>
            <CommonButton
              onPress={handleSubmit(onSubmit)}
              disable={false}
              isSelected={true}
              buttonText={SCREEN_CONSTANTS.CONTACT_US.SUBMIT}
              isLoading={false}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ContactUsScreen;
