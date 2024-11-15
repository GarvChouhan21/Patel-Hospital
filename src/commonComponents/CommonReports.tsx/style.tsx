import { StyleSheet } from "react-native";
import { COLORS,FONTS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      padding: 17,
      backgroundColor: COLORS.PRIMARY_WHITE,
      borderRadius: 20,
      borderColor: COLORS.PRIMARY_GRAY,
      flexDirection: 'row',
      marginVertical: 8
    },
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 51,
      height: 51,
      width: 51,
    },
    reportName: {
      fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
      color: COLORS.PRIMARY_BLACK,
      fontSize: 14,
      flexWrap: 'wrap',
    },
    containerMain: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    reportDescription: {
      fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
      color: COLORS.SECONDARY_GRAY,
      fontSize: 12,
      marginTop: 3,
    },
    secondContainer: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      position:'static'
    },
    resportStyle: {
      width:'77%'
    }
  });
  