import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  socialLoginButtonContainer: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderColor: COLORS.SECONDARY_GRAY,
  },
  TextStyle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21.94,
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
    color: COLORS.PRIMARY_BLACK
  },

  button: {
    width: '100%',
    height: 54,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonWithLoading: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    gap: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.PRIMARY_WHITE,
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD
  },
  selectedButton: {
    backgroundColor: COLORS.PRIMARY_BLUE,
  },
  unselectedButton: {
    backgroundColor: COLORS.SECONDARY_GRAY
  },

  OutLineButtonContainer: {
    borderWidth: 1,
    height: 54,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primaryRed,
  },
  outlineButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.PRIMARY_RED,
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD
  },
});
