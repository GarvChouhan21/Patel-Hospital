import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  Text,
  ScrollView,
} from 'react-native';
import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
import {getPrescrptionDetail} from '../../services/prescriptionApi';
import {useRoute} from '@react-navigation/native';
import {styles} from './style';

const PrescriptionDetails = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const routes: any = useRoute();

  useEffect(() => {
    setLoading(true);
    getPrescriptionDetails();
  }, []);
  const getPrescriptionDetails = async () => {
    try {
      const result = await getPrescrptionDetail(
        routes?.params.mrno,
        routes?.params.visitId,
      );
      // console.log('result prescription details.......', JSON.stringify(result));
      setData(result);
    } catch (error) {
      console.error('Error in prescription details', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" color="#0F6EFD" style={styles.error} />
      </SafeAreaView>
    );
  }

  if (!data) {
    return (
      <SafeAreaView style={styles.error}>
        <Text>No data available</Text>
      </SafeAreaView>
    );
  }

  const {patient, prescriptions} = data;

  const getPatientData = () => {
    if (!patient) return null;
    return Object.keys(patient).map(key => (
      <View style={styles.userInfo}>
        <View style={styles.userDetailText}>
          <Text style={styles.heading}>{key} </Text>
        </View>
        <View>
          <Text style={styles.textColor}>: {patient[key]}</Text>
        </View>
      </View>
    ));
  };

  const getKeys = () => {
    if (!prescriptions) return null;
    return Object.keys(prescriptions).map(key => {
      // console.log('key=====', prescriptions[key]);
      return (
        <View style={styles.detailsSection} key={key}>
          <Text style={styles.heading}>{key}</Text>
          {prescriptions[key].length == 0 ? (
            <Text style={styles.textColor}>Not available</Text>
          ) : (
            prescriptions[key].map((item: any, index: any) => (
              <View style={styles.detailItem} key={index}>
                {Object.keys(item).map(subKey => (
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text key={subKey} style={styles.SubkeyHeading}>
                      {`${subKey}`}
                    </Text>
                    <Text key={subKey} style={styles.txt}>
                      {`${item[subKey] || 'None'}`}
                    </Text>
                  </View>
                ))}
              </View>
            ))
          )}
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderComponent
        isLeftIcon
        isCenterText
        centerText={SCREEN_CONSTANTS.PRESCRIPTION.HEADING}
        isRightProfile={true}
        isRightComponent
      />
      <View style={styles.mainContainer}>
        <View style={styles.horizontalLine}></View>
        <View style={styles.userInfo}>
          <View style={styles.userDetailText}>
            <Text style={styles.heading}>MRNO </Text>
          </View>
          <View>
            <Text style={styles.textColor}>: {routes?.params.mrno}</Text>
          </View>
        </View>
        <View>{getPatientData()}</View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.detailsContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {getKeys()}
            <View style={{marginBottom: '45%'}}></View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PrescriptionDetails;
