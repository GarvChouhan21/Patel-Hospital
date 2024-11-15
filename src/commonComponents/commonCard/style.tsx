import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../utils/Colors";

export const styles=StyleSheet.create({
    selectContainer:{
        backgroundColor:COLORS.PRIMARY_WHITE,
        paddingHorizontal:17,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        borderRadius:20,
        paddingVertical:32,
        borderWidth:1,
        borderColor:COLORS.PRIMARY_GRAY,
        marginVertical:12
    },
    flex:{
        flex:1,
    },
    cardHeading:{
        fontFamily:FONTS.MONTESERRAT_SEMIBOLD,
        fontWeight:"700",
        fontSize:20,
        color:COLORS.PRIMARY_BLACK,
        marginBottom:14
    },
    subHeading:{
        marginBottom:22,
        fontFamily:FONTS.MONTESRRAT_MEDIUM,
        fontWeight:"500",
        fontSize:12,
        color:COLORS.SECONDARY_GRAY,
    }
    
})