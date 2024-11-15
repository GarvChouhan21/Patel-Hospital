import {View, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';
import {COLORS} from '../../utils/Colors';
import {Filter} from '../../../assets/images';

const CommonSearchWithFilter = ({
  inputPlaceholder,
  handleFilterPress,
  onSearch,
}: {
  inputPlaceholder: string;
  handleFilterPress: () => void;
  onSearch?: any
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={inputPlaceholder}
          placeholderTextColor={COLORS.TERTIARY_GRAY}
          style={styles.input}
          onChangeText={(text) => {onSearch(text)}}
        />
      </View>
      <TouchableOpacity onPress={handleFilterPress}>
        <Filter />
      </TouchableOpacity>
    </View>
  );
};

export default CommonSearchWithFilter;
