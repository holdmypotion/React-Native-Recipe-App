import * as React from "react";
import { Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const Stack = createStackNavigator();

const MealStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Stack.Screen name="Categories">
        {(props) => <CategoriesScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="CategoryMeals">
        {(props) => <CategoryMealsScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="MealDetail">
        {(props) => <MealDetailScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Favorite">
        {(props) => <FavoriteScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const FiltersStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerTintColor: "#000",
      }}
    >
      <Stack.Screen name="Filters">
        {(props) => <FiltersScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.secondary,
        inactiveTintColor: "gray",
      }}
      shifting={true}
      activeColor="white"
      inactiveColor="gray"
      barStyle={{ backgroundColor: Colors.primary }}
    >
      <Tab.Screen
        name="Meals"
        component={MealStackNavigator}
        options={{
          tabBarLabel:
            Platform.OS === "android" && Platform.Version >= 21 ? (
              <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
            ) : (
              "Meals"
            ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-restaurant" color={color} size={25} />
          ),
          tabBarColor: Colors.primary,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteStackNavigator}
        options={{
          tabBarLabel:
            Platform.OS === "android" && Platform.Version >= 21 ? (
              <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
            ) : (
              "Favorites"
            ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-star" color={color} size={25} />
          ),
          tabBarColor: Colors.secondary,
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Meals"
        drawerStyle={{
          width: 240,
        }}
        drawerContentOptions={{
          activeTintColor: Colors.secondary,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        }}
      >
        <Drawer.Screen name="Meals" component={TabNavigator} />
        <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
