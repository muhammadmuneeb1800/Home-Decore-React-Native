import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(247, 197, 183, 0.51)',
    justifyContent: 'flex-end',
  },
  subContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  cancelButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  cancelButtonText: {
    color: COLORS.primaryDark,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 22,
  },
  logoutButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  logoutButtonText: {
    color: COLORS.secondaryDark,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 22,
  },
  line: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginVertical: 30,
  },
});
