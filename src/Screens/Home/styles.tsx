import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils/Colors';
export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:COLORS.APPBACK_GROUND,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  container: {
    flexDirection: 'row',
    marginTop: 18,
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
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  date: {
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
    color: COLORS.SECONDARY_GRAY,
    fontSize: 12,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 18,
  },
  imageStyle: {
    marginTop: 15,
  },
  btn: {
    position : 'static'
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 20, 
    width: '100%',
    alignItems: 'center',
  },
});
