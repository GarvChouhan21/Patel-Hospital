import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {InputField} from '../../../commonComponents/InputField';
import {styles} from './styles';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import CommonButton from '../../../commonComponents/commonButton';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RULES} from '../../../utils/rules';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

const ContactUsScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  const navigation = useNavigation<NavigationProp<any>>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const FooterContainer = () => {
    return (
      <View style={styles.buttonContainer}>
        <CommonButton
          onPress={handleSubmit(onSubmit)}
          disable={false}
          isSelected={true}
          buttonText={SCREEN_CONSTANTS.CONTACT_US.SUBMIT}
          isLoading={false}
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
          centerText={SCREEN_CONSTANTS.CONTACT_US.HEADING}
        />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <InputField
              {...{
                multiline: false,
                label: `${SCREEN_CONSTANTS.CONTACT_US.FULL_NAME}`,
                inputlabel: `${SCREEN_CONSTANTS.CONTACT_US.FULL_NAME_PLACEHOLDER}`,
                name: 'fullName',
                control,
                rules: {required: RULES.FULL_NAME},
              }}
            />
            <InputField
              {...{
                multiline: false,
                label: `${SCREEN_CONSTANTS.CONTACT_US.EMAIL}`,
                inputlabel: `${SCREEN_CONSTANTS.CONTACT_US.EMAIL_PLACEHOLDER}`,
                name: 'email',
                control,
                rules: {required: RULES.EMAIL},
              }}
            />
            <InputField
              {...{
                multiline: false,
                label: `${SCREEN_CONSTANTS.CONTACT_US.SUBJECT}`,
                inputlabel: `${SCREEN_CONSTANTS.CONTACT_US.SUBJECT_PLACEHOLDER}`,
                name: 'subject',
                control,
                rules: {required: RULES.SUBJECT},
              }}
            />
            <InputField
              {...{
                multiline: true,
                label: `${SCREEN_CONSTANTS.CONTACT_US.MESSAGE}`,
                inputlabel: `${SCREEN_CONSTANTS.CONTACT_US.MESSAGE_PLACEHOLDER}`,
                name: 'message',
                control,
                rules: {required: RULES.MESSAGE},
              }}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingScrollView>
  );
};

export default ContactUsScreen;
