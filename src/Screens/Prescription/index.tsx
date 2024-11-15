import {ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
import CommonReportsCard from '../../commonComponents/CommonReports.tsx/Index';
import {SafeAreaView} from 'react-native';
import {getPrescriptionList} from '../../services/prescriptionApi';
import BottomSheetScreen from '../../commonComponents/bottomSheet/Index';
import CommonSearchWithFilter from '../../commonComponents/CommonSearchWithFilter';
import {useRoute} from '@react-navigation/native';

const Prescription = () => {
  const [data, setData] = useState([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [searchInputData, setSearchInputData] = useState('');
  const routes: any = useRoute();

  const handleFilterPress = () => {
    setIsSheetOpen(true);
  };
  useEffect(() => {
    setLoading(true);
    getPrescription();
  }, []);

  const getPrescription = async () => {
    try {
      const result = await getPrescriptionList('10', '341250');
      // const result = await getPrescriptionList('10', routes.params.mrno);
      console.log("result......",result);
      setData(result.rows);
      setLoading(false);
    } catch (error) {
      console.error('Error in get Prescription', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        isLeftIcon
        isCenterText
        centerText={SCREEN_CONSTANTS.PRESCRIPTION.HEADING}
        isRightProfile={true}
        isRightComponent
      />
      <View style={styles.mainContainer}>
        <CommonSearchWithFilter
          inputPlaceholder={SCREEN_CONSTANTS.PRESCRIPTION.SEARCH_PLACEHOLDER}
          handleFilterPress={handleFilterPress}
          onSearch={(text: any) => setSearchInputData(text)}
        />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0F6EFD"
            style={styles.error}
          />
        ) : (
          <CommonReportsCard
            data={data}
            filteredData={filteredData}
            searchInputData={searchInputData}
            screenType = 'prescription'
          />
        )}
      </View>
      <BottomSheetScreen
        onPress={() => setIsSheetOpen(false)}
        isOpen={isSheetOpen}
        onChange={(value: any) => {
          setFilteredData(value);
        }}
        prescription={true}
      />
    </SafeAreaView>
  );
};

export default Prescription;
