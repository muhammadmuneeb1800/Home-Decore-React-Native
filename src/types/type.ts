import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface linksProps {
  title?: string;
  icon?: string;
}

type RootStateListStack = {
  login?: undefined;
  register?: undefined;
  forgot?: undefined;
  reset?: undefined;
  home?: undefined;
  search?: undefined;
};

export type navigationPropsStack =
  NativeStackNavigationProp<RootStateListStack>;

type RootStateListTab = {
  tab?: {
    screen?: 'home' | 'myProfile';
  };
};

export type navigationPropsTab = BottomTabNavigationProp<RootStateListTab>;
