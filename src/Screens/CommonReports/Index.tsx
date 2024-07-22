import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
import {Filter} from '../../../assets/images';
import {COLORS} from '../../utils/Colors';
import CommonReportsCard from '../../commonComponents/CommonReports.tsx/Index';
import {SafeAreaView} from 'react-native';

const CommonReports = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        isLeftIcon
        isCenterText
        centerText={SCREEN_CONSTANTS.REPORTS.HEADING}
        isRightProfile={true}
        isRightComponent
      />
      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={SCREEN_CONSTANTS.REPORTS.SEARCH_PLACEHOLDER}
              placeholderTextColor={COLORS.TERTIARY_GRAY}
              style={styles.input}
            />
          </View>
          <View style={styles.filterContainer}>
            <Filter />
          </View>
        </View>
        <CommonReportsCard />
      </View>
    </SafeAreaView>
  );
};

export default CommonReports;
