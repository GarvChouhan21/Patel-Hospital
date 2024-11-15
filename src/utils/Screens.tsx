import ChangePasswordScreen from '../screens/authentication/changePassword';
import ForgotPasswordScreen from '../screens/authentication/forgotPassword';
import LoginScreen from '../screens/authentication/login/Index';
import OtpScreen from '../screens/authentication/otp';
import ImageView from '../screens/imageView';
import Prescription from '../screens/Prescription';
import PrescriptionDetails from '../screens/Prescription/prescriptionDetails';
import AddEditProfile from '../screens/Profile/addEditProfile/Index';
import ContactUsScreen from '../screens/Profile/contactUs';
import ProfileMenu from '../screens/Profile/profileMenu/Index';
import ReportsDetailsScreen from '../screens/ReportDetails';
import ReportsScreen from '../screens/Reports/Index';
import SelectType from '../screens/selectType/Index';

export const SCREEN_NAME = {
  LOGIN: 'Login',
  SELECT_SCREEN: 'select_type',
  REPORTS_SCREEN: 'ReportsScreen',
  PROFILE_MENU: 'profileMenu',
  ADD_EDIT_PROFILE: 'addEditProfile',
  OTP_SCREEN: 'otpScreen',
  REPORT_DETAILS: 'ReportsDetailsScreen',
  IMAGE_VIEW: 'imageView',
  FORGOT_PASSWORD: 'forgot',
  CONTACT_US: 'contactUs',
  CHANGE_PASSWORD:'changePasswordScreen',
  PRESCRIPTION:'prescription',
  PRESCRIPTION_DETAIILS: 'prescriptionDetails'
};
export const NavigationConstant = [
  {
    name: SCREEN_NAME.LOGIN,
    component: LoginScreen,
  },
  {
    name: SCREEN_NAME.FORGOT_PASSWORD,
    component: ForgotPasswordScreen,
  },
  {
    name: SCREEN_NAME.CHANGE_PASSWORD,
    component: ChangePasswordScreen,
  },
  {
    name: SCREEN_NAME.SELECT_SCREEN,
    component: SelectType,
  },
  {
    name: SCREEN_NAME.REPORTS_SCREEN,
    component: ReportsScreen,
  },
  {
    name: SCREEN_NAME.OTP_SCREEN,
    component: OtpScreen,
  },
  {
    name: SCREEN_NAME.REPORT_DETAILS,
    component: ReportsDetailsScreen,
  },
  {
    name: SCREEN_NAME.IMAGE_VIEW,
    component: ImageView,
  },
  {
    name: SCREEN_NAME.PROFILE_MENU,
    component: ProfileMenu,
  },
  {
    name: SCREEN_NAME.ADD_EDIT_PROFILE,
    component: AddEditProfile,
  },
  {
    name: SCREEN_NAME.CONTACT_US,
    component: ContactUsScreen,
  },
  {
    name: SCREEN_NAME.PRESCRIPTION,
    component: Prescription
  },
  {
    name: SCREEN_NAME.PRESCRIPTION_DETAIILS,
    component: PrescriptionDetails
  }
];
