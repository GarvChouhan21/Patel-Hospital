import {Image, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {ShareIcon} from '../../../assets/images';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {SCREEN_NAME} from '../../utils/Screens';
import {styles} from './style';

const CommonReportsCard = ({
  reports,
  data,
  filteredData,
  searchInputData,
  screenType,
}: any) => {
  const navigation = useNavigation<NavigationProp<any>>();

    const filteredPrescriptions = filteredData
    ? (reports || data).filter(
        (item: any) => item.DOCID && item.DOCID === filteredData.drId,
      )
    : reports || data;

  const filteredAndSearchedData = searchInputData
    ? filteredPrescriptions.filter((item: any) =>
        item.DOCID?.toString().includes(searchInputData.toString()),
      )
    : filteredPrescriptions;

  // const filteredPrescriptions =
  //   screenType === 'prescription'
  //     ? filteredData
  //       ? data.filter(
  //           (item: any) => item.DOCID && item.DOCID === filteredData.drId,
  //         )
  //       : data
  //     : filteredData
  //     ? reports.filter(
  //         (item: any) => item.INVESTIGATIONS == filteredData.INVESTIGATIONS,
  //       )
  //     : reports;

  // const filteredAndSearchedData =
  //   screenType === 'prescription'
  //     ? searchInputData
  //       ? filteredPrescriptions.filter((item: any) =>
  //           item.DOCID?.toString().includes(searchInputData.toString()),
  //         )
  //       : filteredPrescriptions
  //     :  filteredPrescriptions.filter((item: any) =>
  //         item.INVESTIGATIONS?.toString().includes(searchInputData.toString()),
  //       );

  const handlePress = (report: any) => {
    report.MRNO && report.VISITID
      ? navigation.navigate(SCREEN_NAME.PRESCRIPTION_DETAIILS, {
          mrno: report.MRNO,
          visitId: report.VISITID,
        })
      : navigation.navigate(SCREEN_NAME.REPORT_DETAILS, {
          reqId: report.REQID,
          testId: report.TESTID,
          investigations: report.INVESTIGATIONS,
        });
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => handlePress(item)}>
        <View style={styles.containerMain}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/profile.png')}
          />
          <View>
            <View style={styles.resportStyle}>
              <Text style={styles.reportName}>
                {item.DOCID || item.INVESTIGATIONS}
              </Text>
            </View>
            <Text style={styles.reportDescription}>By Dr. Govind Sarkar</Text>
            {/* <Text style={styles.reportDescription}>{item.drName}</Text> */}
          </View>
        </View>
        <View style={styles.secondContainer}>
          <ShareIcon />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={filteredAndSearchedData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default CommonReportsCard;
