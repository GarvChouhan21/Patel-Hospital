import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.PRIMARY_GRAY,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: '75%',
    backgroundColor:COLORS.PRIMARY_WHITE,
    height:60
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 15,
    marginTop: 20,
  },
  input: {
    width: '90%',
    flex: 1,
    fontFamily:FONTS.MONTESRRAT_MEDIUM,
    fontSize:16
  },
  filterContainer: {
    width: '15%',
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
