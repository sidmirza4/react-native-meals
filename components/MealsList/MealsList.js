import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealsList = ({ items }) => {
	function renderMealItem(itemData) {
		const item = itemData.item;

		const mealtemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		};

		return <MealItem {...mealtemProps} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});

export default MealsList;
