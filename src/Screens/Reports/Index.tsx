import {ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
import CommonReportsCard from '../../commonComponents/CommonReports.tsx/Index';
import {SafeAreaView} from 'react-native';
import {getTestList} from '../../services/reportApi';
import BottomSheetScreen from '../../commonComponents/bottomSheet/Index';
import CommonSearchWithFilter from '../../commonComponents/CommonSearchWithFilter';
import {useRoute} from '@react-navigation/native';

const ReportsScreen = () => {
  const [reportData, setReportData] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchInputData, setSearchInputData] = useState('');
  const routes: any = useRoute();
  const handleFilterPress = () => {
    setIsSheetOpen(true);
  };

  useEffect(() => {
    setLoading(true);
    getTest();
  }, []);

  const getTest = async () => {
    try {
      const result = await getTestList('10', routes.params.mrno);
      setReportData(result.rows);
      // console.log('result get Text', JSON.stringify(result));
      setLoading(false);
    } catch (error) {
      console.error('Error in get Test', error);
    }
  };

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
        <CommonSearchWithFilter
          inputPlaceholder={SCREEN_CONSTANTS.REPORTS.SEARCH_PLACEHOLDER}
          handleFilterPress={handleFilterPress}
          onSearch={(text: any) => setSearchInputData(text)}
        />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0F6EFD"
            style={styles.loader}
          />
        ) : (
          <CommonReportsCard
            data={reportData}
            searchInputData={searchInputData}
            screenType="reports"

          />
        )}
      </View>
      <BottomSheetScreen
        onPress={() => setIsSheetOpen(false)}
        isOpen={isSheetOpen}
      />
    </SafeAreaView>
  );
};

export default ReportsScreen;
