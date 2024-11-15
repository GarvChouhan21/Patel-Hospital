import React, {useRef, useMemo, useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import DropdownComponent from '../commonDropdown';
import {COLORS, FONTS} from '../../utils/Colors';
import {SCREEN_CONSTANTS} from '../../utils/screenConstants';
import CommonButton from '../commonButton';
import CommonButtonColor from '../CommonButtonColor/ColorButton';
import DatePicker from 'react-native-date-picker';
import {Cross} from '../../../assets/images';
import {getDoctorsApi} from '../../services/doctorApi';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const BottomSheetScreen = ({isOpen, onPress, onChange, prescription}: any) => {
  const [doctorList, setDoctorList] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [dropDownData, setDropDownData] = useState({drName: '', drId: ''});
  const [TestData, setTestData] = useState('');
  const [clearData, setClearData] = useState(false);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['55%'], []);
  const handleSheetChanges = useCallback((index: any) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    try {
      const result = await getDoctorsApi();
      const doctors = result.rows || [];
      const validDoctors = doctors.filter(
        (doctor: any) => doctor.FIRST_NAME && doctor.LAST_NAME,
      );
      const doctorList = validDoctors.map((doctor: any) => ({
        label: `${doctor.FIRST_NAME} ${doctor.LAST_NAME}`,
        // value: doctor.DOC_ID,
        value: 1
      }));
      setDoctorList(doctorList);
    } catch (error) {
      console.error('Error in getDoctors', error);
    }
  };

  const handleSubmit = () => {
    if(prescription){
      onChange({
        drName: dropDownData.drName,
        drId: 'DOC00219',
        testname: TestData,
        startdate: startDate,
        enddate: endDate,
      });
      bottomSheetRef.current?.close();
    }else{
      Alert.alert("----");
    }
  };

  const handleClearData = () => {
    setClearData(true);
    setStartDate(new Date());
    setEndDate(new Date());
    setTimeout(() => {
      setClearData(false);
    }, 100);
  }

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleStartDateConfirm = (date: any) => {
    setStartDate(date);
    hideStartDatePicker();
  };

  const handleEndDateConfirm = (date: any) => {
    setEndDate(date);
    hideEndDatePicker();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      style={styles.bottomSheetContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingStyle}>
            {SCREEN_CONSTANTS.FILTER.HEADING}
          </Text>
          <TouchableOpacity
            onPress={() => {
              bottomSheetRef.current?.close();
              onPress();
            }}>
            <Cross />
          </TouchableOpacity>
        </View>
        <DropdownComponent
          onChange={(value: any) => {
            setDropDownData({
              drName: value.label,
              drId: value.value,
            });
          }}
          heading="Doctor"
          optionHeading="Select Doctor"
          data={doctorList || []}
          clear={clearData}
        />
        <DropdownComponent
          onChange={(test: any) => {
            setTestData(test.label);
          }}
          heading="Test"
          optionHeading="Select Test"
          data={data}
          clear={clearData}
        />
        <View>
          <Text style={styles.labelTextStyle}>
            {SCREEN_CONSTANTS.FILTER.DATE}
          </Text>
        </View>
        <View style={styles.dateView}>
          <View style={styles.date}>
            <TouchableOpacity onPress={showStartDatePicker}>
              <Text style={styles.txt}>{startDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.stroke}>
            <Image source={require('../../../assets/images/Stroke.png')} />
          </View>
          <View style={styles.date}>
            <TouchableOpacity onPress={showEndDatePicker}>
              <Text style={styles.txt}>{endDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DatePicker
          modal
          mode="date"
          open={isStartDatePickerVisible}
          date={startDate}
          onConfirm={handleStartDateConfirm}
          onCancel={hideStartDatePicker}
        />
        <DatePicker
          modal
          mode="date"
          open={isEndDatePickerVisible}
          date={endDate}
          onConfirm={handleEndDateConfirm}
          onCancel={hideEndDatePicker}
        />
        <View style={styles.filterButtonContainer}>
          <CommonButton
            {...{
              onPress: () => handleSubmit(),
              isSelected: true,
              buttonText: 'Submit',
              isLoading: false,
              buttonStyle: styles.buttonStyle,
            }}
          />
          <CommonButtonColor
            {...{
              onPress: () => handleClearData(),
              isSelected: true,
              title: 'Clear All',
              isLoading: false,
              buttonStyle: styles.buttonStyle,
              TextColor: COLORS.PRIMARY_BLACK,
            }}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  date: {
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_GRAY,
    borderRadius: 9,
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: COLORS.PRIMARY_WHITE,
  },
  stroke: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  txt: {
    fontSize: 16,
    color: COLORS.SECONDARY_GRAY,
    letterSpacing: 2,
  },
  labelTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
    color: COLORS.PRIMARY_BLACK,
    marginBottom: 5,
  },
  filterButtonContainer: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_GRAY,
  },
  headingStyle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: FONTS.INTER_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
  },
  headingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
});

export default BottomSheetScreen;

