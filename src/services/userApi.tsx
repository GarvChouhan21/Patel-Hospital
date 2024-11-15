import AsyncStorage from '@react-native-async-storage/async-storage';
import {EndPoints} from '.';
import {getAuthToken} from './prescriptionApi';

export const login = async (email: string, password: string) => {
  console.log("email",email);
  console.log("password",password);
  try {
      const response = await fetch(`${process.env.API_BASE_URL}/${EndPoints.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email, 
        password: password
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in login', error);
  }
};

export const getProfileApi = async () => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${EndPoints.GET_PROFILE}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log('Response from get profile', response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in get profile...', error);
  }
};

export const editProfileApi = async (
  firstName: string,
  lastName: string,
  phone: string,
) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const response = await fetch(
      `${process.env.API_BASE_URL}/${EndPoints.UPDATE_PROFILE}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          phone: phone,
        }),
      },
    );
    if (!response.ok) {
      throw new Error('Error in update profile');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in update profile', error);
  }
};

export const changePasswordApi = async (
  currentPassword: string,
  newPassword: string,
) => {
  const token = await getAuthToken();
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${EndPoints.CHANGE_PASSWORD}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: currentPassword,
          newPassword: newPassword,
        }),
      },
    );
    const data = await response.json();
    return response;
  } catch (error) {
    console.log('Error in change password', error);
    return null;
  }
};

export const EmailVerificationApi = async (identifier: string) => {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${EndPoints.FORGOT_PASSWORD_Link}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: identifier,
        }),
      },
    );
    return response;
  } catch (error) {
    console.log('Error in email verification', error);
    return null;
  }
};

export const ResetPasswordApi = async (newPassword: string, token: string) => {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${EndPoints.RESET_PASSWORD}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          newPassword: newPassword,
        }),
      },
    );
    const data = await response.json();
    return response;
  } catch (error) {
    console.log('Error in  password', error);
    return null;
  }
};
