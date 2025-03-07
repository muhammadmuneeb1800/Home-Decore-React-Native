import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
      <Toast />
    </NavigationContainer>
  );
}
