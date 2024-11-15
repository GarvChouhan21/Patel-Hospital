import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import { COLORS } from '../../utils/Colors';

const ToastMessage = () => {
  const toastConfig = {
    error: (props: any) => (
      <ErrorToast
        {...props}
        text1NumberOfLines={5}
        style={{
          borderLeftColor: COLORS.PRIMARY_RED,
          backgroundColor: COLORS.PRIMARY_RED,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          color: COLORS.PRIMARY_WHITE
        }}
        text1Style={{
          marginVertical: 2,
          fontSize: 15,
          textAlign: 'center',
          color: COLORS.PRIMARY_WHITE
        }}
      />
    ),
    success: (props: any) => (
      <BaseToast
        {...props}
        text1NumberOfLines={5}
        style={{
          borderLeftColor: COLORS.PRIMARY_BLUE,
          backgroundColor: COLORS.PRIMARY_BLUE,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          color: COLORS.PRIMARY_WHITE
        }}
        text1Style={{
          marginVertical: 2,
          fontSize: 14,
          color: COLORS.APPBACK_GROUND,
          textAlign: 'center',
        }}
      />
    ),
  };
  return <Toast config={toastConfig} />;
};

export default ToastMessage;
