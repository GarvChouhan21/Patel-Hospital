import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../utils/Colors';
import {styles} from './styles';
import { ActivityIndicator } from 'react-native';

interface button {
  onPress: () => any | undefined;
  disable?: boolean;
  isSelected: boolean;
  buttonText?: string;
  buttonStyle?: object;
  isLoading?: boolean;
}

const CommonButton = ({
  onPress,
  disable,
  isSelected,
  buttonText,
  buttonStyle,
  isLoading = false,
}: button) => {
  const handlePress = () => {
    onPress !== undefined && onPress();
  };
  return (
    <TouchableOpacity
      disabled={disable}
      style={[
        buttonStyle ? buttonStyle : styles.button,
        isSelected ? styles.selectedButton : styles.unselectedButton,
        isLoading && styles.buttonWithLoading
      ]}
      onPress={handlePress}>
      {!isLoading ?
        <Text style={styles.buttonText}>
        {buttonText !== '' ? buttonText : 'Continue'}
      </Text> :
      <ActivityIndicator color={COLORS.PRIMARY_WHITE} size={18} />}
    </TouchableOpacity>
  );
};

export default CommonButton;
