import React from 'react';
import {
  View,
} from 'react-native';
import { SCREEN_CONSTANTS } from '../../../utils/screenConstants';
import ChangePasswordScreen from '../../authentication/changePassword';

const ChangePassword = () => {
        return (
              <ChangePasswordScreen 
                    message = "Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%)."
                    currentPassword = {SCREEN_CONSTANTS.CHANGEPASSWORD.CURRENT_PASSWORD}
                    currentPasswordPlaceholder = {SCREEN_CONSTANTS.CHANGEPASSWORD.CONFIRM_PASSWORD_PLACEHOLDER}
                    forgotPassword = "Forgot Password?"
              />
        );
};

export default ChangePassword;