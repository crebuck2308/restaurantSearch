import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/SearchScreen";

const navigator = createStackNavigator({

  Search: SearchScreen

}, {
  initialRouteName: 'Search',

  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }

}
);

export default createAppContainer(navigator);