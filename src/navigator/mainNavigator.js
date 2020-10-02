import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList122391Navigator from '../features/ArticleList122391/navigator';
import ArticleList122390Navigator from '../features/ArticleList122390/navigator';
import BlankScreen0122389Navigator from '../features/BlankScreen0122389/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList122391: { screen: ArticleList122391Navigator },
ArticleList122390: { screen: ArticleList122390Navigator },
BlankScreen0122389: { screen: BlankScreen0122389Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
