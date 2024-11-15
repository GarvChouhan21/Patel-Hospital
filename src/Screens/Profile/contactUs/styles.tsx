import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/Colors';

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 30,
    marginBottom: 16,
    marginHorizontal: 16,
  },
});
