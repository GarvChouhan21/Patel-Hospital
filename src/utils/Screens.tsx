import ChangePasswordScreen from "../screens/authentication/changePassword";
import ForgotPasswordScreen from "../screens/authentication/forgotPassword";
import LoginScreen from "../screens/authentication/login/Index";
import CommonReports from "../screens/commonReports/Index";
import AddEditProfile from "../screens/Profile/addEditProfile/Index";
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
        name:SCREEN_NAME.PROFILE_MENU,
        component:ProfileMenu
    },
    {
        name:SCREEN_NAME.ADD_EDIT_PROFILE,
        component:AddEditProfile
    }
]