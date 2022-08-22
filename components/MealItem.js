import {
	View,
	Text,
	Pressable,
	Image,
	StyleSheet,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

export default function MealItem({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) {
	const navigation = useNavigation();

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => pressed && styles.buttonPressed}
				onPress={() => {
					navigation.navigate("MealDetails", {
						mealId: id,
					});
				}}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image style={styles.image} source={{ uri: imageUrl }} />
						<Text style={styles.title}>{title}</Text>
					</View>

					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "white",
		elevation: 4,
		overflow: Platform.OS === "android" ? "hidden" : "visible",

		// iOS
		backgroundColor: "white",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 8,
	},

	innerContainer: {
		flex: 1,
		borderRadius: 8,
		overflow: "hidden",
	},

	image: {
		width: "100%",
		height: 200,
	},

	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},

	buttonPressed: {
		opacity: 0.5,
	},
});
