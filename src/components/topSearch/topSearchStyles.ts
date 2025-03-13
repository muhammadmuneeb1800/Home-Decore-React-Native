import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 35,
    marginTop: 10,
    gap: 25,
  },
  icon: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: 15,
    fontWeight: 500,
  },
});
