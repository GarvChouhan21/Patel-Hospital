import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils/Colors';

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
    borderColor: Colors.primaryPlaceholder,
  },
  TextStyle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21.94,
    fontFamily: Fonts.MONTESERRAT_SEMIBOLD,
    color: Colors.primaryBlack
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
    color: Colors.primaryWhite,
    fontFamily: Fonts.MONTESERRAT_SEMIBOLD
  },
  selectedButton: {
    backgroundColor: Colors.primaryBlue,
  },
  unselectedButton: {
    backgroundColor: Colors.primaryGray
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
    color: Colors.primaryRed,
    fontFamily: Fonts.MONTESERRAT_SEMIBOLD
  },
});
