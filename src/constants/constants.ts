import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import GetStarted from '../screens/getStarted/GetStarted';
import Home from '../screens/home/Home';
import Lists from '../screens/lists/Lists';
import Login from '../screens/login/Login';
import MyProfile from '../screens/myProfile/MyProfile';
import Register from '../screens/register/Register';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import WishList from '../screens/wishList/WishList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Carts from '../screens/carts/Carts';
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import Search from '../screens/search/Search';
import UpdateProfile from '../screens/updateProfile/UpdateProfile';
import UpdatePassword from '../screens/updatePassword/UpdatePassword';
import MyOrders from '../screens/myOrders/MyOrders';

export const AUTH_STACK = [
  {name: 'tab', component: BottomTabNavigation},
  {name: 'getSarted', component: GetStarted},
  {name: 'login', component: Login},
  {name: 'register', component: Register},
  {name: 'forgot', component: ForgotPassword},
  {name: 'reset', component: ResetPassword},
];

export const GUST_STACK = [
  {name: 'search', component: Search},
  {name: 'updateProfile', component: UpdateProfile},
  {name: 'updatePassword', component: UpdatePassword},
  {name: 'myOrders', component: MyOrders},
];

export const TAB_STACK = [
  {name: 'home', component: Home, Icon: Ionicons, IconName: 'home-outline'},
  {
    name: 'lists',
    component: Lists,
    Icon: MaterialCommunityIcons,
    IconName: 'format-list-checkbox',
  },
  {name: 'cart', component: Carts, Icon: Ionicons, IconName: 'cart-outline'},
  {
    name: 'wishlist',
    component: WishList,
    Icon: AntDesign,
    IconName: 'hearto',
  },
  {name: 'profile', component: MyProfile, Icon: AntDesign, IconName: 'user'},
];

export const IMAGES = [
  require('../assets/images/homescreen.png'),
  require('../assets/images/homescreen.png'),
  require('../assets/images/homescreen.png'),
];

export const LINKS = [
  {
    title: 'Privacy Policy',
    route: 'MyAccount',
    icon: 'person-circle-outline',
  },
  {
    title: 'Payment Methods',
    route: 'AddressBook',
    icon: 'address-card-outline',
  },
  {
    title: 'Notification',
    route: 'PaymentMethods',
    icon: 'card-outline',
  },
  {
    title: 'Settings',
    route: 'ChangePassword',
    icon: 'key-outline',
  },
  {
    title: 'Help',
    route: 'HelpSupport',
    icon: 'help-circle-outline',
  },
  {
    title: 'Logout',
    route: 'Logout',
    icon: 'log-out-outline',
  },
];
