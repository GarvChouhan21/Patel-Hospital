import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {style} from './style';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import {InputField} from '../../../commonComponents/InputField';
import {useForm} from 'react-hook-form';
import CommonButton from '../../../commonComponents/commonButton';
import {CountryPicker} from 'react-native-country-codes-picker';
import {editProfileApi, getProfileApi} from '../../../services/userApi';
import {COLORS} from '../../../utils/Colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '../../../utils/Screens';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';
import {parsePhoneNumberFromString} from 'libphonenumber-js';

const AddEditProfile = () => {
  const [show, setShow] = useState(false);
  const [phoneInputValue, setPhoneInputValue] = useState<any>(null);
  const navigation = useNavigation<NavigationProp<any>>();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editBtn, setEditBtn] = useState(true);
  const [displayImage, setDisplayImage] = useState(false);
  const [imageSource, setImageSource] = useState<any>(null);
  const [countryCode, setDefaultCode] = useState<any>({
    name: '',
    dial_code: '',
    flag: '🇮🇳',
  });
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    countryCode: ''
  });
  const {control, handleSubmit} = useForm();

  const openCamera = () => {
    const options: any = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled the image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        const source = {uri: response.assets[0].uri};
        setImageSource(source);
        setDisplayImage(true);
      }
    });
  };

  function getFlagEmoji(countryCode: any) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char: any) => 127397 + char.charCodeAt());

    return String.fromCodePoint(...codePoints);
  }

  function getFlagEmojiByPhoneNumber(phoneNumberWithCode: any) {
    const phoneNumberObj = parsePhoneNumberFromString(phoneNumberWithCode);

    if (phoneNumberObj && phoneNumberObj.country) {
      return getFlagEmoji(phoneNumberObj.country);
    } else {
      return '🏳️';
    }
  };

  const onSubmit = async (data: any) => {
    const firstName = data.firstName || profileData.firstName;
    const lastName = data.lastName || profileData.lastName;
    const phoneNumber = phoneInputValue || profileData.phone;
    try {
      const phoneNumberWithCode = `${countryCode.dial_code}${phoneNumber}`;
      await editProfileApi(
        firstName.trim(),
        lastName.trim(),
        phoneNumberWithCode.trim(),
      );
      Toast.show({
        type: 'success',
        text1: 'Profile updated successfully',
        position: 'bottom',
        visibilityTime: 1500,
        swipeable: true,
      });
      setEdit(false);
      navigation.navigate(SCREEN_NAME.PROFILE_MENU);
    } catch (error) {
      console.error('Error updating profile', error);
      Toast.show({
        type: 'error',
        text1: 'Profile update failed',
        position: 'bottom',
        visibilityTime: 1500,
        swipeable: true,
      });
    }
  };

  const onChangeText = (text: any) => {
    setPhoneInputValue(text);
  };

  useEffect(() => {
    setLoading(true);
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const result = await getProfileApi();
      // setDefaultCode({
      //   flag: getFlagEmojiByPhoneNumber(result.PHONE),
      //   dial_code: `+${
      //     parsePhoneNumberFromString(result.PHONE)?.countryCallingCode || ''
      //   }`,
      // });
      if (result) {
        setLoading(false);
        setProfileData({
          firstName: result.FIRST_NAME,
          lastName: result.LAST_NAME,
          phone: result.PHONE,
          email: result.EMAIL,
          countryCode: result.COUNTRY_CODE
        });
      }
    } catch (error) {
      console.error('Error in get profile', error);
    }
  };

  const handleEdit = () => {
    setEdit(true);
    setEditBtn(false);
  };

  const RightText = () => {
    return editBtn ? (
      <TouchableOpacity onPress={() => handleEdit()}>
        <Text style={style.edit}>{SCREEN_CONSTANTS.PROFILE.Edit}</Text>
      </TouchableOpacity>
    ) : null;
  };

  const FooterContainer = () => {
    return (
      edit && (
        <View style={style.buttonContainer}>
          <CommonButton
            onPress={handleSubmit(onSubmit)}
            disable={false}
            isSelected={true}
            buttonText={SCREEN_CONSTANTS.PROFILE.SAVE}
            isLoading={false}
          />
        </View>
      )
    );
  };

  return (
    <KeyboardAvoidingScrollView
      containerStyle={style.scrollContainer}
      stickyFooter={FooterContainer()}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={style.container}>
        <HeaderComponent
          isLeftIcon
          isCenterText
          isRightComponent
          RightComponent={RightText}
        />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0F6EFD"
            style={style.loader}
          />
        ) : (
          <>
            <TouchableOpacity disabled={!edit} onPress={openCamera}>
              {displayImage ? (
                <Image
                  source={{uri: imageSource?.uri}}
                  style={style.profileContainer}
                />
              ) : (
                <View style={style.profileContainer} />
              )}
              {edit && (
                <View style={style.EditIconStyle}>
                  <MaterialIcons
                    name="edit"
                    size={18}
                    color={COLORS.PRIMARY_BLUE}
                  />
                </View>
              )}
            </TouchableOpacity>
            <View style={style.mainContainer}>
              <InputField
                {...{
                  multiline: false,
                  label: SCREEN_CONSTANTS.PROFILE.FIRST_NAME,
                  name: 'firstName',
                  defaultValue: profileData.firstName,
                  control,
                  editable: edit ? true : false,
                }}
              />
              <InputField
                {...{
                  multiline: false,
                  label: SCREEN_CONSTANTS.PROFILE.LAST_NAME,
                  name: 'lastName',
                  defaultValue: profileData.lastName,
                  editable: edit ? true : false,
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
                    {/* <Text style={{ marginTop: 3 }}>{countryCode?.dial_code}</Text> */}
                    <TextInput
                      keyboardType="number-pad"
                      style={style.inputData}
                      defaultValue={profileData.phone}
                      placeholderTextColor={COLORS.SECONDARY_GRAY}
                      onChangeText={text => onChangeText(text)}
                      editable={edit}
                    />
                  </View>
                  <CountryPicker
                    show={show}
                    pickerButtonOnPress={item => {
                      console.log('item', item);
                      setDefaultCode({
                        name: item?.name,
                        dial_code: item?.dial_code,
                        flag: item?.flag,
                      });
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
                  defaultValue: profileData.email,
                  editable: false,
                  control,
                }}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </KeyboardAvoidingScrollView>
  );
};

export default AddEditProfile;
