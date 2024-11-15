import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils/Colors';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.PRIMARY_GRAY,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: '80%',
    backgroundColor: COLORS.PRIMARY_WHITE,
    height: 60,
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 8,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.MONTESRRAT_MEDIUM,
    fontSize: 16,
    color: COLORS.PRIMARY_BLACK
  },
});
