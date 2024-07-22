import ChangePasswordScreen from "../screens/authentication/changePassword";
import ForgotPasswordScreen from "../screens/authentication/forgotPassword";
import LoginScreen from "../screens/authentication/login/Index";
import CommonReports from "../screens/CommonReports/Index";
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

    }
]