import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../utils/Colors';


export const styles = StyleSheet.create({
  socialLoginButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    paddingVertical: 20,
    marginHorizontal: 16,
    marginVertical: 9,
    borderRadius: 12,
    borderColor: COLORS.SECONDARY_GRAY,
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.94,
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
  },

  button: {
    width: '100%',
    height: 54,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: FONTS.INTER_MEDIUM,
  },
  selectedButton: {},
  unselectedButton: {
    backgroundColor: COLORS.PRIMARY_WHITE,
  },

  buttonWithLoading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
