import AsyncStorage from '@react-native-async-storage/async-storage';
import {EndPoints} from '.';

export const getTestList = async (pageSize: string, mrno: string) => {
  const token = await AsyncStorage.getItem('token');
  const queryString = new URLSearchParams({
    pageSize,
    mrno,
  }).toString();
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${EndPoints.GET_TEST_LIST}?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    console.log('Reports data....', response);
    return data;
  } catch (error) {
    console.error('Error in get test list', error);
  }
};

export const getParametricReports = async (reqId: string, testId: string) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${EndPoints.GET_PARAMETRIC_REPORT}/${reqId}/${testId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    console.log('data.............', data);
    return data;
  } catch (error) {
    console.error('Error in get Parametric Reports', error);
  }
};

export const getWordReport = async (reqId: string, testId: string) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${EndPoints.GET_WORD_REPORT}/${reqId}/${testId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    console.log("response from get word report", response);
    return data;
  } catch (error) {
    console.error('Error in get Word Report', error);
  }
};
