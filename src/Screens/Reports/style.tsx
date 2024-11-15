import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APPBACK_GROUND,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
    paddingBottom:10
  },
  loader: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
