import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
import HeaderComponent from '../../commonComponents/commonHeader.tsx/Header';
import {useRoute} from '@react-navigation/native';
import { getParametricReports} from '../../services/reportApi';
import { Table, Row, Rows } from 'react-native-table-component';

const ReportsDetailsScreen = () => {
  const [tableHead, setTableHead] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [reportDetails, setReportDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reportNotFound, setReportNotFound] = useState(false);
  const routes: any = useRoute();
  useEffect(() => {
    setLoading(true);
    getReportDetails();
  },[]);

  const getReportDetails = async () => {
    try{
      const result = await getParametricReports(routes?.params.reqId,routes?.params.testId);
      // console.log("result for report details???/", JSON.stringify(result));
      if (result.length === 0) {
        setReportNotFound(true);
        setLoading(false);
        return;
      }
      const details = result[0] || {};
      const headers: any = ['Parameter Name', 'Result Value', 'Normal Range', 'Units']; 
      const data = result[0]?.results?.map((item:any) => [
        item.component || 'N/A', 
        item.values?.resultValue || 'N/A',
        item.values?.normalValue || 'N/A',
        item.values?.units || 'N/A'
      ]) || [];

      setTableHead(headers);
      setTableData(data);
      setReportDetails({
        reqNo: details.reqNo || 'N/A',
        testId: details.testId || 'N/A',
        reqId: details.reqId || 'N/A',
        methods: details.methods || 'N/A',
      });
      setReportNotFound(false);
    }
    catch(error){
      console.error('Error in report details', error);
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderComponent
          isLeftIcon
          isCenterText
          centerText={SCREEN_CONSTANTS.HOMEPAGE.HEADING}
          isRightProfile={true}
          isRightComponent
        />
      {loading &&  <ActivityIndicator size='large' color='#0F6EFD' style={{flex:1,justifyContent:'center', alignItems:'center'}}/>}
      {!loading && !reportNotFound && (
        <View style={styles.mainContainer}>
           {reportDetails && (
          <View style={{marginTop:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View><Text style={styles.reportTxt}>reqNo: {reportDetails.reqNo}</Text></View>
                <View><Text style={styles.reportTxt}>testId: {reportDetails.testId}</Text></View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                <View><Text style={styles.reportTxt}>reqId: {reportDetails.reqId}</Text></View>
                <View><Text style={styles.reportTxt}>date: 07/08/24</Text></View>
            </View>
            <Text style={styles.reportTxt}>method: {reportDetails.methods}</Text>
          </View>
            )} 
         
          <View style={styles.tableView}>
          <Text style={{textAlign:'center',marginBottom:10,fontWeight:'bold',color: '#000000'}}>{routes.params.investigations}</Text>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.headtext} />
            </Table>
            <ScrollView style={styles.dataWrapper} showsVerticalScrollIndicator={false} >
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Rows data={tableData} textStyle={styles.text} />
            </Table>
            </ScrollView>
          </View>
        </View>
        )}
       {!loading && reportNotFound && (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{ textAlign: 'center', fontSize: 18, color: 'red'}}>Report not found</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ReportsDetailsScreen;


       