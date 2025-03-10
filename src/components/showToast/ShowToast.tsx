import Toast, {ToastType} from 'react-native-toast-message';

export const showToast = (
  type: ToastType,
  text1: string,
  text2?: string,
): void => {
  Toast.show({
    type,
    text1,
    text2,
    position: 'top',
    visibilityTime: 3000,
    autoHide: true,
  });
};
