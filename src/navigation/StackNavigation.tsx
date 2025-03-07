import {StatusBar} from 'react-native';
import {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/frontendScreens/splashScreen/SplashScreen';
import MyProfileScreen from '../screens/frontendScreens/myProfileScreen/MyProfileScreen';

const stack = createNativeStackNavigator();
export default function StackNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const time = setTimeout(() => setIsOpen(false), 3000);
    return () => clearTimeout(time);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
              component={MyProfileScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </stack.Navigator>
    </>
  );
}
