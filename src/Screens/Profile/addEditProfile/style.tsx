import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../utils/Colors";

export const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.APPBACK_GROUND
    },
    edit:{
        fontFamily:FONTS.INTER_MEDIUM,
        color:COLORS.PRIMARY_BLUE,
        fontSize:18
    },
    mainContainer:{
        marginHorizontal:16,
    },
    image:{
        height:125,
        width:125,
        borderRadius:125,
        bottom:40
    },
    imageContainer:{
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        flexDirection:"row",
        alignItems:"center"
    },
    flag: {
        fontSize: 25,
        marginRight: 10,
      },
      countryCodeText: {
        color: COLORS.PRIMARY_BLACK,
        fontSize: 16,
      },
      inputData:{
        alignItems:"center",
        fontSize:16,
        width:"80%",
        marginTop:1
      },
      phoneContainer:{
        marginVertical:10
      },
      phoneHeader:{
        fontSize: 16,
        fontWeight: '600',
        fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
        color: COLORS.PRIMARY_BLACK,
        marginBottom:5
      },
      buttonContainer: {
        padding: 16,
        backgroundColor: COLORS.APPBACK_GROUND, // Ensure background color matches the overall design
      },
      phoneInputContainer:{
        backgroundColor:COLORS.PRIMARY_WHITE,
        borderRadius:10,
        paddingLeft:20
      }
})