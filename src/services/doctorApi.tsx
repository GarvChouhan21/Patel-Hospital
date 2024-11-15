import AsyncStorage from "@react-native-async-storage/async-storage";
import { EndPoints } from ".";

export const getDoctorsApi = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch(
        `${process.env.API_BASE_URL}/${EndPoints.GET_DOCTORS}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('Response from get Doctors', response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in get Doctors...', error);
    }
  };