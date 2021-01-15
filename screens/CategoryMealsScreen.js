import React, { useLayoutEffect } from "react";

import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const filteredMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, [navigation]);

  return <MealList listData={filteredMeals} navigation={navigation} />;
};

export default CategoryMealScreen;
