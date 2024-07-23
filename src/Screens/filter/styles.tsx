import { StyleSheet } from "react-native";
import { FONTS,COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
  safeArea : {
    flex : 1,
    backgroundColor:COLORS.APPBACK_GROUND
  },
  container: {
    marginHorizontal : 16,
  },
  dateView: {
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  date: {
    borderWidth : 1,
    backgroundColor: COLORS.PRIMARY_WHITE,
    borderColor: COLORS.SECONDARY_WHITE,
    borderRadius : 7,
    paddingHorizontal : 18,
    paddingVertical : 12
  },
  stroke: {
    justifyContent : 'center',
    alignItems : 'center'
  } ,
  labelTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
    color: COLORS.PRIMARY_BLACK,
    marginBottom : 5
  }, 
  btn: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 35
  },
  txt: {
    fontSize: 16,
    color : COLORS.SECONDARY_GRAY
  }
});