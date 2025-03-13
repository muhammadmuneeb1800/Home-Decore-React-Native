import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  img: {
    width: 'auto',
    height: 150,
    marginTop: 10,
    backgroundColor: COLORS.primary,
  },
  container: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 500,
  },
  para: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 300,
    lineHeight: 16,
  },
  line: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: '100%',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
    marginTop: 10,
  },
  oldPrice: {
    color: COLORS.primaryDark,
    fontSize: 15,
    fontWeight: 500,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2,
  },
});
