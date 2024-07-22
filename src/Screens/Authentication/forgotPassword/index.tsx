import React from "react";
import { SafeAreaView, View , Alert,Text} from "react-native";
import { useForm } from 'react-hook-form';
import { InputField } from "../../../commonComponents/InputField";
import { styles } from "./styles";
import { SCREEN_CONSTANTS } from "../../../utils/screenConstants";
import CommonButton from "../../../commonComponents/commonButton";

const ForgotPasswordScreen = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data:any) => {
        console.log(data);
      };
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
            <InputField
          {...{
            multiline: false,
            label: `${SCREEN_CONSTANTS.FORGOTPASSWORD.EMAIL}`,
            inputlabel: `${SCREEN_CONSTANTS.FORGOTPASSWORD.EMAIL_PLACEHOLDER}`,
            name: 'email',
            control,
            // rules: RULEs.Required,
          }}
        />
        
        <View style={styles.buttonContainer}>
          <CommonButton
            onPress={handleSubmit(onSubmit)}
            disable={false}
            isSelected={true}
            buttonText={SCREEN_CONSTANTS.FORGOTPASSWORD.CONTINUE}
            isLoading={false}
          />
        </View>
            </View>
        </SafeAreaView>
        
    );
};

export default ForgotPasswordScreen;