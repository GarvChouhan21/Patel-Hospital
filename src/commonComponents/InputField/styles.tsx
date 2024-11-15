import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../utils/Colors';

export const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    gap: 8,
  },
  textInputStyle: {
    fontSize: 14,
    fontFamily: '500',
    padding: 0,
    margin:0,
    height:45,
    color:COLORS.PRIMARY_BLACK
  },
  labelTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
    color: COLORS.PRIMARY_BLACK,
  },
  commonContainerStyle: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.PRIMARY_WHITE,
    borderColor: COLORS.SECONDARY_WHITE,
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
    color: COLORS.PRIMARY_BLACK,
  },
});
