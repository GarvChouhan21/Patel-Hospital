import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Prescription, Registration, ShareIcon} from '../../../assets/images';
import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../utils/Screens';

const SelectType = () => {
const navigation=useNavigation<NavigationProp<any>>()
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent isleftLogo 
      isLeftIcon
      isRightProfile={true}
      isRightComponent/>
     <View style={styles.mainContainer}>
     <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NAME.COMMON_REPORT_SCREEN)} style={styles.selectContainer}>
        <View style={styles.flex}>
          <Text style={styles.cardHeading}>
            {SCREEN_CONSTANTS.SELECT_TYPE.PRESCRIPTION}
          </Text>
          <Text style={styles.subHeading}>
            {SCREEN_CONSTANTS.SELECT_TYPE.LIST_OF_PRESCRIPTION}
          </Text>
          <ShareIcon />
        </View>
        <Prescription />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NAME.COMMON_REPORT_SCREEN)} style={styles.selectContainer}>
        <View style={styles.flex}>
          <Text style={styles.cardHeading}>
            {SCREEN_CONSTANTS.SELECT_TYPE.PRESCRIPTION}
          </Text>
          <Text style={styles.subHeading}>
            {SCREEN_CONSTANTS.SELECT_TYPE.LIST_OF_PRESCRIPTION}
          </Text>
          <ShareIcon />
        </View>
        <Registration />
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};

export default SelectType;
