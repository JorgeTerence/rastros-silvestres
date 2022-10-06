import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import TabIcon from "./app/components/TabIcon";
import { brand } from "./app/config/colors";
import BookletScreen from "./app/screens/BookletScreen";
import HomeScreen from "./app/screens/HomeScreen";
import IndexScreen from "./app/screens/IndexScreen.jsx";

const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator
      barStyle={{ backgroundColor: brand.ocean }}
      screenOptions={({ route }) => ({
        tabBarIcon: () => <TabIcon icon={route.name.toLowerCase()} />,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Index" component={IndexScreen} />
      <Tab.Screen name="Booklet" component={BookletScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
