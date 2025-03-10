import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TAB_STACK} from '../constants/constants';

const Tab = createBottomTabNavigator();
import {View} from 'react-native';

const renderTabIcon =
  (Icon: React.ComponentType<any> | undefined, IconName: string) =>
  ({focused}: {focused: boolean}) => {
    if (!Icon) {
      return null;
    }

    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Icon name={IconName} size={25} color={focused ? 'black' : 'pink'} />
        {focused && (
          <View
            style={{
              position: 'absolute',
              bottom: -6,
              height: 3,
              width: 20,
              backgroundColor: 'black',
              borderRadius: 2,
            }}
          />
        )}
      </View>
    );
  };

export default function BottomTabNavigation() {
  return (
    <>
      <Tab.Navigator>
        {TAB_STACK?.map(({name, component, Icon, IconName}) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
              },
              tabBarIcon: renderTabIcon(Icon, IconName),
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
}
