import { View, Text, StyleSheet } from "react-native";
import React from "react";

import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
	const favoriteMealsCtx = React.useContext(FavoritesContext);

	const favoriteMeals = MEALS.filter((meal) =>
		favoriteMealsCtx.ids.includes(meal.id)
	);

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.screen}>
				<Text style={styles.text}>
					No favorite meals found. Start adding some!
				</Text>
			</View>
		);
	}

	return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
});
