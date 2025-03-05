import {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/frontendScreens/splashScreen/SplashScreen';
import HomeScreen from '../screens/frontendScreens/homeScreen/HomeScreen';

const stack = createNativeStackNavigator();
export default function StackNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const time = setTimeout(() => setIsOpen(false), 3000);
    return () => clearTimeout(time);
  }, []);

  return (
    <stack.Navigator>
      {isOpen ? (
        <stack.Screen
          name="authStack"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <stack.Screen
            name="loginScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </stack.Navigator>
  );
}
