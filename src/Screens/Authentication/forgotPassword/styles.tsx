import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/Colors';

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
    marginHorizontal: 16,
  },
});
