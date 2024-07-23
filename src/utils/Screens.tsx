import ChangePasswordScreen from "../screens/authentication/changePassword";
import ForgotPasswordScreen from "../screens/authentication/forgotPassword";
import LoginScreen from "../screens/authentication/login/Index";
import OtpScreen from "../screens/authentication/otp";
import CommonReports from "../screens/CommonReports/Index";
import HomeScreen from "../screens/Home";
import ImageView from "../screens/imageView";
import SelectType from "../screens/selectType/Index";

export const SCREEN_NAME={
    LOGIN:'Login',
    SELECT_SCREEN:'select_type',
    COMMON_REPORT_SCREEN:'report_screen'
}
export const NavigationConstant=[
    {
        name:SCREEN_NAME.LOGIN,
        component:LoginScreen
    },
    {
        name:"forgot",
        component:ForgotPasswordScreen
    },
    {
        name:"changePassword",
        component:ChangePasswordScreen
    }
    ,{
        name:SCREEN_NAME.SELECT_SCREEN,
        component:SelectType
    },
    {
        name:SCREEN_NAME.COMMON_REPORT_SCREEN,
        component:CommonReports
    },
    {
        name:"otpScreen",
        component:OtpScreen
    },
    {
        name:"home",
        component:HomeScreen
    },
    {
        name:"imageView",
        component:ImageView
    }
]