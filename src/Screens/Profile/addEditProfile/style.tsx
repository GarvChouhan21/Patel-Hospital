import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../utils/Colors';

export const style = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  edit: {
    fontFamily: FONTS.INTER_MEDIUM,
    color: COLORS.PRIMARY_BLUE,
    fontSize: 18,
  },
  mainContainer: {
    marginHorizontal: 16,
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 125,
    bottom: 40,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  flag: {
    fontSize: 25,
    marginRight: 10,
  },
  countryCodeText: {
    marginTop: 3,
  },
  inputData: {
    alignItems: 'center',
    width: '80%',
    marginTop: 1,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.5,
    fontFamily: FONTS.MONTESRRAT_MEDIUM,
    color: COLORS.PRIMARY_BLACK,
  },
  phoneContainer: {
    marginVertical: 10,
  },
  phoneHeader: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.MONTESERRAT_SEMIBOLD,
    color: COLORS.PRIMARY_BLACK,
    marginBottom: 5,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  phoneInputContainer: {
    backgroundColor: COLORS.PRIMARY_WHITE,
    borderRadius: 10,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: COLORS.SECONDARY_WHITE,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    position: 'relative',
    width: 137,
    height: 137,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.PRIMARY_GRAY,
  },
  EditIconStyle: {
    height: 27,
    width: 27,
    borderRadius: 60,
    backgroundColor: COLORS.PRIMARY_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '36%',
  },
});
