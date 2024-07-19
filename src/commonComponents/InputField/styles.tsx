import {Platform, StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../utils/Colors';

export const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 14,
    marginVertical: 10,
    gap: 8,
  },
  textInputStyle: {
    fontSize: 14,
    fontFamily: '500',
    padding: 0,
    margin:0,
    height:45,
    color:COLORS.primaryBlack
  },
  labelTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
    color: COLORS.primaryBlack,
  },
  commonContainerStyle: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.primaryWhite,
    borderColor: COLORS.secondaryWhite,
    borderWidth:1,
    
  },
  multilineInputContainerStyle: {
    flex: 1,
    paddingHorizontal: 10,
    minHeight: 45,
    paddingTop: 2,
  },
  multilineInputStyle: {
    flex: 1,
    textAlignVertical: 'top',
    maxHeight: 110,
    minHeight: 40,
  },
  commontInput: {height: 45},
  passwordInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  font: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.5,
    fontFamily: FONTS.MONTESRRAT_MEDIUM,
    color: COLORS.primaryBlack,
  },
});
