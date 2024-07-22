import React from "react";
import { SafeAreaView, View , Alert,Text} from "react-native";
import { useForm } from 'react-hook-form';
import { InputField } from "../../../commonComponents/InputField";
import { styles } from "./styles";
import { SCREEN_CONSTANTS } from "../../../utils/screenConstants";
import CommonButton from "../../../commonComponents/commonButton";

const ChangePasswordScreen = () => {
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
            label: `${SCREEN_CONSTANTS.CHANGEPASSWORD.NEWPASSWORD}`,
            inputlabel: `${SCREEN_CONSTANTS.CHANGEPASSWORD.NEWPASSWORD_PLACEHOLDER}`,
            name: 'password',
            control,
            // rules: RULEs.Required,
          }}
        />
          <InputField
          {...{
            multiline: false,
            label: `${SCREEN_CONSTANTS.CHANGEPASSWORD.CONFIRMPASSWORD}`,
            inputlabel: `${SCREEN_CONSTANTS.CHANGEPASSWORD.CONFIRMPASSWORDPLACEHOLDER}`,
            name: 'password',
            control,
            // rules: RULEs.Required,
          }}
        />
        <View style={styles.buttonContainer}>
          <CommonButton
            onPress={handleSubmit(onSubmit)}
            disable={false}
            isSelected={true}
            buttonText={SCREEN_CONSTANTS.CHANGEPASSWORD.CONTINUE}
            isLoading={false}
          />
        </View>
            </View>
        </SafeAreaView>
        
    );
};

export default ChangePasswordScreen;