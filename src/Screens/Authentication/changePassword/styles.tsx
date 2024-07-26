import { StyleSheet } from "react-native";
import { COLORS,FONTS } from "../../../utils/Colors";

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
    },
    textView : {
        backgroundColor : "#FFFFFF",
        padding : 20,
        borderRadius : 13,
        marginBottom : 15
    },
    text : {
        textAlign:'center',
        color: COLORS.SECONDARY_GRAY,
    },
    btnText : {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
        color: "#254C93",
    }
})