import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoriteContextProvider from "./store/context/favorite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#351401",
				},
				headerTintColor: "#fff",
				sceneContainerStyle: {
					backgroundColor: "#3f2f25",
				},
				drawerContentStyle: {
					backgroundColor: "#351401",
				},
				drawerInactiveTintColor: "#fff",
				drawerActiveTintColor: "#351401",
				drawerActiveBackgroundColor: "#e4baa1",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: "All Categories",
					drawerIcon: ({ size, color }) => (
						<Ionicons size={size} color={color} name="list" />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ size, color }) => (
						<Ionicons size={size} color={color} name="star" />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<FavoriteContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: "#351401",
							},
							headerTintColor: "#fff",
							contentStyle: {
								backgroundColor: "#3f2f25",
							},
						}}
					>
						<Stack.Screen
							name="Drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="MealsOverview"
							component={MealsOverviewScreen}
						/>
						<Stack.Screen
							name="MealDetails"
							component={MealDetailsScreen}
							options={{ title: "About the meal" }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</FavoriteContextProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
