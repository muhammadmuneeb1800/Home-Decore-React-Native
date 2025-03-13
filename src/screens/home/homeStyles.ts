import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 20,
  },
  Category: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 23,
    color: COLORS.primaryDark,
    marginTop: 20,
  },
  best: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 23,
    color: COLORS.primaryDark,
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 10,
  },
  bgSeller: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  kit: {
    fontSize: 15,
    fontWeight: 500,
    color: COLORS.blackDark,
    marginBottom: 10,
  },
  lorem: {
    fontSize: 13,
    fontWeight: 300,
    lineHeight: 17,
    color: COLORS.blackDark,
    marginBottom: 10,
    width: '70%',
  },
  mainBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  subBtn: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    gap: 5,
  },
  num: {
    color: COLORS.blackDark,
    fontSize: 15,
    fontWeight: 500,
  },
  now: {
    color: COLORS.blackDark,
    fontSize: 10,
    fontWeight: 400,
  },
  shop: {
    backgroundColor: 'white',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  fullMain: {
    marginTop: 10,
    paddingTop: 20,
    position: 'relative',
  },
  img: {
    position: 'absolute',
    top: -20,
    right: -15,
    height: '100%',
  },
  collection: {
    marginBottom: 40,
  },
  flate: {
    justifyContent: 'space-between',
  },
});
