import { KFTeaDrink } from '@backend/types/kf';
import { useState, useMemo, useEffect } from 'react';
import { debounce } from './useDebounce';
import { getRandomDrinks } from '@backend/controller/logic';

// Add id to KFTea
interface customKFTea extends KFTeaDrink {
	id: number;
}

export default function useKungfuData({ recipesCount }: { recipesCount?: number }) {
	const [search, setSearch] = useState<string>('');
	const [drinks, setDrinks] = useState<any[]>(getRandomDrinks(recipesCount || 10));

	const updateSearch = debounce((value: string) => {
		setSearch((prev: any) => value);
	}, 1000);

	// const recipes: any[] = KF_TEA_LIST;

	useEffect(() => {
		const getDrinks = getRandomDrinks(recipesCount || 10);
		setDrinks(prev => getDrinks);
	}, [recipesCount]);

	const filteredRecipes: customKFTea[] = useMemo(() => {
		return drinks.filter((recipe: KFTeaDrink) => {
			return recipe.name.toLowerCase().includes(search.toLowerCase());
		});
	}, [search, drinks]);

	return {
		updateSearch,
		recipes: filteredRecipes,
	};
}
