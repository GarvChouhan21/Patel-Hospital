import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  mainContainer: {
    marginHorizontal:16,
    flex: 1,
    overflow: 'hidden',
    paddingBottom: 10,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  reportTxt: {
    fontSize: 14,
    fontWeight: '500',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: COLORS.PRIMARY_BLACK
  },
  SubkeyHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginVertical: 4,
    color: COLORS.PRIMARY_BLACK
  },
  txt: {
    fontSize: 14,
    fontWeight: 'light',
    textTransform: 'capitalize',
    marginVertical: 4,
    color: COLORS.PRIMARY_BLACK
  },
  textColor: {
    color: COLORS.PRIMARY_BLACK
  },
  details: {
    marginTop: 17,
  },
  detailsContainer: {
    flex: 1,
    marginTop: 5,
  },
  detailsSection: {
    marginBottom: 15,
  },
  detailItem: {
    // marginBottom: 10,
    backgroundColor: COLORS.PRIMARY_WHITE,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_GRAY,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8
  },
  userInfo: {
    flexDirection: 'row',
    marginTop: 2,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#DCDCDC',
    marginVertical: 15,
  },
  userDetailText: {
    width: '30%',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
