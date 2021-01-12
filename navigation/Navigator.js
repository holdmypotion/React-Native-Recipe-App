import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoritesScreen";

const Stack = createStackNavigator();

const MealStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#000",
      }}
    >
      <Stack.Screen name="Categories" options={{ title: "Categories" }}>
        {(props) => <CategoriesScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="CategoryMeals"
        options={({ route }) => {
          return { title: route.params.title };
        }}
      >
        {(props) => <CategoryMealsScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="MealDetail"
        options={({ route }) => {
          return { title: route.params.mealTitle };
        }}
      >
        {(props) => <MealDetailScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Meals") {
              iconName = "ios-restaurant";
            } else if (route.name === "Favorite") {
              iconName = "ios-star";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.secondary,
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Meals" component={MealStackNavigator} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
