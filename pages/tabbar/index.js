import colors from "../../assets/colors/colors";
import Home from "../Home";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StyleSheet} from "react-native";
import {Profile} from "../Profile";
const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
      <Tab.Navigator
          screenOptions={{
            style: styles.tabBar,
            tabBarActiveTintColor: colors.orange,
            tabBarInactiveTintColor: colors.gray,
            showLabel: false,
          }}


      >
        <Tab.Screen name="Home" component={Home}
                    options={{
                      tabBarIcon: ({ color }) => <Entypo name="home" size={32} color={color} />,
                    }}
        />
        <Tab.Screen name="Profile" component={Profile}
                    options={{
                      tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={32} color={color} />,
                    }}
        />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
})
