import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const filteredMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (filteredMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, [navigation]);

  return <MealList listData={filteredMeals} navigation={navigation} />;
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
