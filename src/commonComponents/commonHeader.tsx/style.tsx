import {Platform, StatusBar, StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../utils/Colors';

export const styles = StyleSheet.create({
  commonContainerStyles: {paddingVertical:Platform.OS=='android' ?  19 :4, paddingHorizontal: 16,flexDirection:"row"},
  commonStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centertextContainer: {alignItems: 'center'},
  rightIconContainer: {alignItems: 'flex-end'},
  emptyTag: {width: '10%'},
  centerTextStyle: {
    fontSize: 21,
    fontWeight: '600',
    color: COLORS.PRIMARY_BLACK,
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
    alignSelf: 'center',
  },
  leftTextStyle:{
    fontSize: 21,
    fontWeight: '600',
    color: COLORS.PRIMARY_BLACK,
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
  }
});
