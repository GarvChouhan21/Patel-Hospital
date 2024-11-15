import {View, SafeAreaView, Alert, BackHandler} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styles} from './style';
import {Prescription, Registration} from '../../../assets/images';
import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '../../utils/Screens';
import CommonCard from '../../commonComponents/commonCard';
import { getProfileApi } from '../../services/userApi';

const SelectType = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [mrNo, setMrNo] = useState('');

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try{
      const result = await getProfileApi();
      setMrNo(result.USERNAME);
    }
    catch(error){
        console.error('Error in get profile', error);
    }
};

const cardData = [
  {
    id: 1,
    heading: SCREEN_CONSTANTS.SELECT_TYPE.PRESCRIPTION,
    subHeading: SCREEN_CONSTANTS.SELECT_TYPE.LIST_OF_PRESCRIPTION,
    icon: <Prescription />,
    navigationScreen: SCREEN_NAME.PRESCRIPTION,
  },
  {
    id: 2,
    heading: SCREEN_CONSTANTS.SELECT_TYPE.REPORTS,
    subHeading: SCREEN_CONSTANTS.SELECT_TYPE.LIST_OF_REPORTS,
    icon: <Registration />,
    navigationScreen: SCREEN_NAME.REPORTS_SCREEN,
  },
];
 const backAction = (navigation: any) => {
  if (navigation.isFocused()) {
    Alert.alert('', 'Are you sure you want to exit the app?', [
      {text: 'YES', onPress: () => BackHandler.exitApp()},
      {
        text: 'NO',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
    return true;
  }
  return false;
};

useEffect(() => {
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    () => backAction(navigation),
  );
  return () => backHandler.remove();
}, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        isleftLogo
        isLeftIcon
        isRightProfile={true}
        isRightComponent
      />
      <View style={styles.mainContainer}>
        {cardData.map(({ id, heading, subHeading, icon, navigationScreen }) => (
          <CommonCard
            key={id}
            heading={heading}
            subHeading={subHeading}
            icon={icon}
            onPress={() => navigation.navigate(navigationScreen, {mrno: mrNo})}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SelectType;
