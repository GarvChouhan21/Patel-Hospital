import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, Colors} from '../../utils/Colors';
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

export const SocialLoginButton = ({
  Icon,
  buttonText,
  onPress,
}: {
  Icon: () => any;
  buttonText: string;
  onPress: () => any;
}) => {
  return (
    <TouchableOpacity
      style={styles.socialLoginButtonContainer}
      onPress={onPress}>
      <Icon />
      <Text style={styles.TextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export const OutLineButton = ({
  buttonText,
  onPress,
}: {
  buttonText: string;
  onPress: () => any;
}) => {
  const handlePress = () => {
    onPress();
  };
  return (
    <TouchableOpacity
      style={styles.OutLineButtonContainer}
      onPress={handlePress}>
      <Text style={styles.outlineButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
