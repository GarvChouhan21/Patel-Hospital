import React from 'react';
import {ShareIcon} from '../../../assets/images';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
const CommonCard = ({heading, subHeading, icon, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.selectContainer}>
      <View style={styles.flex}>
        <Text style={styles.cardHeading}>{heading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
        <ShareIcon />
      </View>
      {icon}
    </TouchableOpacity>
  );
};

export default CommonCard;
