import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  mainProfile: {
    marginTop: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 10,
    color: COLORS.blackDark,
  },
  mainId: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    color: COLORS.blackDark,
  },
  id: {
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.blackDark,
  },
  num: {
    fontSize: 13,
    fontWeight: 500,
    color: COLORS.blackDark,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    marginTop: 15,
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 13,
    fontWeight: 400,
    color: COLORS.blackDark,
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.lightGrey,
    marginVertical: 5,
  },
  links: {
    marginTop: 30,
    flexDirection: 'column',
    gap: 15,
    marginLeft: 15,
  },
});
