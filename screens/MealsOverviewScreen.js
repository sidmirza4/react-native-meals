import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen({ route, navigation }) {
	const catId = route.params.categoryId;
	const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId]);

	return <MealsList items={displayedMeals} />;
}
