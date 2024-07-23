import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../utils/Colors";

export const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.APPBACK_GROUND
    },
    mainContainer:{
        marginHorizontal:16,
        marginTop:15
    },
    profileContainer:{
        padding:17,
        flexDirection:"row",
        gap:20,
        borderRadius:20,
        borderWidth:1,
        borderColor:COLORS.PRIMARY_GRAY,
        backgroundColor:COLORS.PRIMARY_WHITE
    },
    image:{
        height:51,
        width:51,
        borderRadius:51
    },
    nameContainer:{
        justifyContent:"center"
    },
    name:{
        fontFamily:FONTS.MONTESERRAT_SEMIBOLD,
        fontSize:16,
        color:COLORS.PRIMARY_BLACK
    },
    view:{
        fontFamily:FONTS.MONTESERRAT_SEMIBOLD,
        fontSize:14,
        color:COLORS.PRIMARY_BLUE
    },
    margin:{
        marginTop:16,
        alignItems:"center",
        justifyContent:"center"
    },
    contentContainer:{
        flexDirection:"row",
        justifyContent:"center",
        gap:15,
    },
    endBlock:{
        justifyContent:"flex-end",
        flex:1
    }

})