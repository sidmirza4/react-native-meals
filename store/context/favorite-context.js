import { createContext, useState } from "react";

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: () => {},
});

const FavoriteContextProvider = ({ children }) => {
	const [ids, setIds] = useState([]);
	const addFavorite = (id) => {
		setIds([...ids, id]);
	};
	const removeFavorite = (id) => {
		setIds(ids.filter((item) => item !== id));
	};
	return (
		<FavoritesContext.Provider value={{ ids, addFavorite, removeFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
};

export default FavoriteContextProvider;
