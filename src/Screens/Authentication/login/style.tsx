import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../utils/Colors";

export const styles=StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: COLORS.APPBACK_GROUND,
      },
    container:{
        flex:1,
        backgroundColor:COLORS.APPBACK_GROUND
    },
    appLogoContainer:{
        alignItems:"center",
        marginTop:30,
        marginBottom:53
    },
    mainContainer:{
        marginHorizontal:16
    },
    forgetContainer:{
        alignItems:"flex-end"
    },
    forgetText:{
        color:COLORS.SECONDARY_BLUE,
        fontFamily:FONTS.MONTESERRAT_SEMIBOLD,
        fontSize:16
    },
    buttonContainer:{
        marginHorizontal:16,
        marginBottom:16
    }
})