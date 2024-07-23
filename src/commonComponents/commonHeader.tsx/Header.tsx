import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AppLogo, BackArrow, SmallAppLogo} from '../../../assets/images';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { styles } from './style';
import { SCREEN_NAME } from '../../utils/Screens';

const HeaderComponent = ({
  isLeftIcon,
  isCenterText,
  isRightComponent,
  RightComponent,
  centerText,
  isLeftText,
  isLeftPress,
  onLeftPress,
  isleftLogo,
  isRightProfile,
  isEmpty
}: {
  isLeftIcon: boolean;
  isCenterText?: boolean;
  isRightComponent?: boolean;
  isLeftText?: string;
  RightComponent?: () => any;
  centerText?: string;
  isLeftPress?: boolean;
  onLeftPress?: () => any;
  isleftLogo?:boolean;
  isRightProfile?:any,
  isEmpty?:any
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View
      style={[
        styles.commonContainerStyles,
        {
          ...((isLeftIcon && isCenterText && isRightComponent) ||
          (isLeftIcon && isCenterText) ||
          (isLeftIcon && isRightComponent) ||
          (isCenterText && isRightComponent)
            ? styles.commonStyles
            : isCenterText
            ? styles.centertextContainer
            : isRightComponent && styles.rightIconContainer),
        },
      ]}>
      {isleftLogo ? <SmallAppLogo/> :isLeftText ? (
        <Text style={styles.leftTextStyle}>{isLeftText}</Text>
      ) : isLeftIcon ? (
        <TouchableOpacity
          onPress={() =>
            isLeftPress ? onLeftPress && onLeftPress() : navigation.goBack()
          }>
          <BackArrow />
        </TouchableOpacity>
      ) : (
        isEmpty && isRightComponent && <View style={styles.emptyTag} />
      )}
      {isCenterText && <Text style={styles.centerTextStyle}>{centerText}</Text>}
      {isRightProfile ? <TouchableOpacity
          onPress={() =>
            navigation.navigate(SCREEN_NAME.PROFILE_MENU)
          }>
          <Image source={require('../../../assets/images/UserImage.png')}/>
        </TouchableOpacity> : isRightComponent ? (
        <>{RightComponent !== undefined && RightComponent()}</>
      ) : (
        isLeftIcon && isCenterText && <View style={styles.emptyTag} />
      )}
    </View>
  );
};

export default HeaderComponent;
