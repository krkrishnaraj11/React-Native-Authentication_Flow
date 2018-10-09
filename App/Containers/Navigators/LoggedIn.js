import { createBottomTabNavigator } from 'react-navigation'

import Dashboard from '../../Components/Main/Dashboard/Dashboard'
import Profile from '../../Components/Main/Profile/Profile'

const LoggedInNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Profile: {
    screen: Profile
  }
});

export default LoggedInNavigator