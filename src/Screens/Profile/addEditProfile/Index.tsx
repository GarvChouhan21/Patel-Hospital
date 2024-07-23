import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {style} from './style';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import {InputField} from '../../../commonComponents/InputField';
import {useForm} from 'react-hook-form';
import CommonButton from '../../../commonComponents/commonButton';
import {CountryPicker} from 'react-native-country-codes-picker';
import {COLORS} from '../../../utils/Colors';

const AddEditProfile = () => {
  const [show, setShow] = useState(false);
  const [phoneInputValue, setPhoneInputValue] = useState<any>(null);
  const [countryCode, setDefaultCode] = useState<any>({
    name: 'United States',
    dial_code: '+1',
    flag: '🇺🇸',
  });
  const {control, handleSubmit} = useForm();
  const onSubmit = (value: any) => {
    console.log(value);
  };
  const onChangeText = (text: any) => {
    setPhoneInputValue(text);
  };

  const PhoneInput = useCallback(() => {
    return (
      <>
        <Text style={style.flag}>{countryCode.flag}</Text>
        <Text style={style.countryCodeText}>{countryCode?.dial_code}</Text>
        <TextInput
          style={style.input}
          editable={false}
          value={phoneInputValue}
          onChangeText={text => onChangeText(text)}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
      </>
    );
  }, [phoneInputValue]);

  const RightText = () => {
    return (
      <TouchableOpacity>
        <Text style={style.edit}>Edit</Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={style.container}>
        <HeaderComponent
          isLeftIcon
          isCenterText
          isRightComponent
          RightComponent={RightText}
        />
        <View style={style.imageContainer}>
          <Image
            source={require('../../../../assets/images/profile.png')}
            style={style.image}
          />
        </View>
        <ScrollView contentContainerStyle={style.scrollViewContainer}>
          <View style={style.mainContainer}>
            <InputField
              {...{
                multiline: false,
                label: SCREEN_CONSTANTS.PROFILE.NAME,
                name: 'name',
                control,
              }}
            />
            <View style={style.phoneContainer}>
              <Text style={style.phoneHeader}>
                {SCREEN_CONSTANTS.PROFILE.MOBILE_NUMBER}
              </Text>
              <View style={style.phoneInputContainer}>
                <View style={style.input}>
                  <Text onPress={() => setShow(true)} style={style.flag}>
                    {countryCode.flag}
                  </Text>
                  <Text style={style.countryCodeText}>
                    {countryCode?.dial_code}
                  </Text>
                  <TextInput
                    keyboardType="number-pad"
                    style={style.inputData}
                  />
                </View>
                <CountryPicker
                  show={show}
                  pickerButtonOnPress={item => {
                    setDefaultCode(item);
                    setShow(false);
                  }}
                  lang={''}
                />
              </View>
            </View>
            <InputField
              {...{
                multiline: false,
                label: SCREEN_CONSTANTS.PROFILE.EMAIL,
                name: 'email',
                control,
              }}
            />
            <InputField
              {...{
                multiline: false,
                label: SCREEN_CONSTANTS.PROFILE.AGE,
                name: 'age',
                control,
              }}
            />
            <InputField
              {...{
                multiline: false,
                label: SCREEN_CONSTANTS.PROFILE.GENDER,
                name: 'gender',
                control,
              }}
            />
          </View>
        </ScrollView>
        <View style={style.buttonContainer}>
          <CommonButton
            onPress={handleSubmit(onSubmit)}
            disable={false}
            isSelected={true}
            buttonText={SCREEN_CONSTANTS.PROFILE.SAVE}
            isLoading={false}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddEditProfile;
