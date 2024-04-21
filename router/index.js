import {TabNavigator} from "../pages/tabbar";
import Details from "../pages/Details";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()


export const Nav = () => {

  return (
      <Stack.Navigator >
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}