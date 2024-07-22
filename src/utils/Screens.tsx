import ChangePasswordScreen from "../screens/authentication/changePassword";
import ForgotPasswordScreen from "../screens/authentication/forgotPassword";
import LoginScreen from "../screens/authentication/login/Index";

export const NavigationConstant=[
    {
        name:"Login",
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
]