import { StyleSheet } from "react-native";
import { FONTS,COLORS } from "../../utils/Colors";

export const styles = StyleSheet.create({
    mainContainer:{
        marginBottom : 15
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        height: 50,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: COLORS.PRIMARY_WHITE,
        borderColor: COLORS.SECONDARY_WHITE,
        borderWidth:1,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
        color : COLORS.SECONDARY_GRAY
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      labelTextStyle: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
        color: COLORS.PRIMARY_BLACK,
        marginBottom : 5
      },
});