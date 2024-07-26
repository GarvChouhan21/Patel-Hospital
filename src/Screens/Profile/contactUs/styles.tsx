import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../utils/Colors";

export const styles = StyleSheet.create({
    safeArea : {
        flex : 1,
        backgroundColor:COLORS.APPBACK_GROUND
    },
    container : {
        flex : 1,
        marginHorizontal:16,
        marginTop : 10
    },
    buttonContainer : {
        flex : 1,
        justifyContent : 'flex-end',
        marginBottom : 16
    }
});