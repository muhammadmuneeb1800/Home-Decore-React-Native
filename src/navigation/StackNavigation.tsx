import {StatusBar} from 'react-native';
import {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash/Splash';
import {AUTH_STACK} from '../constants/constants';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const time = setTimeout(() => setIsOpen(false), 3000);
    return () => clearTimeout(time);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator>
        {isOpen ? (
          <Stack.Screen
            name="splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            {AUTH_STACK?.map(({name, component}) => (
              <Stack.Screen
                key={name}
                name={name}
                component={component}
                options={{
                  headerShown: false,
                }}
              />
            ))}
          </>
        )}
      </Stack.Navigator>
    </>
  );
}
