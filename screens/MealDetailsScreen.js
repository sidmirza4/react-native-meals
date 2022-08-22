import { useLayoutEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	ScrollView,
	Button,
} from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";

export default function MealDetailsScreen({ route, navigation }) {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	function headerButtonPressHandler() {
		console.log("this is good");
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					onPress={headerButtonPressHandler}
					icon="star"
					color="white"
				/>
			),
		});
	}, []);

	return (
		<ScrollView style={styles.root}>
			<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailsTextStyle}
			/>

			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />

					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	root: {
		marginBottom: 32,
	},

	image: {
		width: "100%",
		height: 350,
	},

	title: {
		fontSize: 24,
		textAlign: "center",
		margin: 8,
		fontWeight: "bold",
		color: "white",
	},

	detailsTextStyle: {
		color: "white",
	},

	listOuterContainer: {
		alignItems: "center",
	},

	listContainer: {
		width: "80%",
	},
});
