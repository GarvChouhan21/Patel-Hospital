import React from "react";
import { SafeAreaView, View , Alert,} from "react-native";
import { useForm } from 'react-hook-form';
import { InputField } from "../../../commonComponents/InputField";

const ForgotPasswordScreen = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data:any) => {
        console.log(data);
        Alert.alert('Form Data', JSON.stringify(data));
      };
    return(
        <SafeAreaView>
            <View>
                <InputField />
            </View>
        </SafeAreaView>
        
    );
};

export default ForgotPasswordScreen;