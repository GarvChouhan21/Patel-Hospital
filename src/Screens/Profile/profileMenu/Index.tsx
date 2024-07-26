import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {style} from './style';
import {SafeAreaView} from 'react-native';
import HeaderComponent from '../../../commonComponents/commonHeader.tsx/Header';
import {SCREEN_CONSTANTS} from '../../../utils/screenConstants';
import {Lock, Logout, RightArrow, Support} from '../../../../assets/images';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../../utils/Screens';

const ProfileMenu = () => {
  const navigation=useNavigation<NavigationProp<any>>()

  
  return (
    <SafeAreaView style={style.container}>
      <HeaderComponent
        isLeftIcon
        isCenterText
        centerText={SCREEN_CONSTANTS.PROFILE.HEADING}
      />
      <View style={style.mainContainer}>
        <View style={style.profileContainer}>
          <Image
            style={style.image}
            source={require('../../../../assets/images/profile.png')}
          />
          <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NAME.ADD_EDIT_PROFILE)} style={style.nameContainer}>
            <Text style={style.name}>Garv Chouhan</Text>
            <Text style={style.view}>{SCREEN_CONSTANTS.PROFILE.VIEW}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[style.profileContainer, style.margin]} onPress={() => navigation.navigate('changePassword')}>
          <View style={style.contentContainer}>
            <Lock />
            <Text style={style.name}>
              {SCREEN_CONSTANTS.PROFILE.CHANGE_PASSWORD}
            </Text>
          </View>
          <View style={[style.contentContainer, style.endBlock]}>
            <RightArrow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[style.profileContainer, style.margin]} onPress={() => navigation.navigate('contactUs')}>
          <View style={style.contentContainer}>
            <Support />
            <Text style={style.name}>
              {SCREEN_CONSTANTS.PROFILE.CONTACT_US}
            </Text>
          </View>
          <View style={[style.contentContainer, style.endBlock]}>
            <RightArrow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[style.profileContainer, style.margin]}>
          <View style={style.contentContainer}>
            <Logout />
            <Text style={style.name}>{SCREEN_CONSTANTS.PROFILE.LOG_OUT}</Text>
          </View>
          <View style={[style.contentContainer, style.endBlock]}>
            <RightArrow />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileMenu;
