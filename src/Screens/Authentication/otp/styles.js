import {StyleSheet} from 'react-native';
import { COLORS } from '../../../utils/Colors';

export const styles = StyleSheet.create({
  safeArea : {
    flex : 1,
    backgroundColor:COLORS.APPBACK_GROUND
  },
  container: {
    flex : 1,
    marginHorizontal: 16,
  },
  otpContainer: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 23,
  },
  text: {
    color: '#4490DF',
  },
  buttonContainer: {
    flex : 1,
    justifyContent : 'flex-end',
    marginBottom : 16
  },
});
