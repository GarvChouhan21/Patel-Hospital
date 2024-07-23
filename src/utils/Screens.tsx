import ChangePasswordScreen from "../screens/authentication/changePassword";
import ForgotPasswordScreen from "../screens/authentication/forgotPassword";
import LoginScreen from "../screens/authentication/login/Index";
import OtpScreen from "../screens/authentication/otp";
import CommonReports from "../screens/CommonReports/Index";
import FilterComponent from "../screens/filter";
import HomeScreen from "../screens/Home";
import ImageView from "../screens/imageView";
import AddEditProfile from "../screens/Profile/addEditProfile/Index";
import ChangePassword from "../screens/Profile/changePassword";
import ProfileMenu from "../screens/Profile/profileMenu/Index";
import SelectType from "../screens/selectType/Index";

export const SCREEN_NAME={
    LOGIN:'Login',
    SELECT_SCREEN:'select_type',
    COMMON_REPORT_SCREEN:'report_screen',
    PROFILE_MENU:"profileMenu",
    ADD_EDIT_PROFILE:"addEditProfile"
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
        name:"changePasswordScreen",
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
    },
    // {
    //     name:"filter",
    //     component:FilterComponent
    // },
    {
        name:SCREEN_NAME.PROFILE_MENU,
        component:ProfileMenu
    },
    {
        name:SCREEN_NAME.ADD_EDIT_PROFILE,
        component:AddEditProfile
    },
    {
        name:"changePassword",
        component:ChangePassword
    }
]