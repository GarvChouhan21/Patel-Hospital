import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import { COLORS } from '../../utils/Colors';

interface CommonButton {
  color?: string;
  onPress: () => any;
  disable?: boolean;
  title?: string;
  buttonStyle?: object;
  isLoading?: boolean;
  TextColor?: string;
}

const CommonButtonColor = (props: CommonButton) => {
  const handlePress = () => {
    props?.onPress();
  };
  return (
    <TouchableOpacity
      disabled={props?.disable}
      style={[
        props.buttonStyle ? props.buttonStyle : styles.button,
        {borderWidth: 1, borderColor: props.color},
        props?.isLoading && styles.buttonWithLoading,
      ]}
      onPress={handlePress}>
      <Text style={[styles.buttonText, {color:  props?.TextColor ?  props?.TextColor : props.color}]}>
        {props.title}
      </Text>
      {props?.isLoading && <ActivityIndicator color={COLORS.PRIMARY_BLUE} />}
    </TouchableOpacity>
  );
};

export default CommonButtonColor;
