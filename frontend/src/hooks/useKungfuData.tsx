import { KFTea } from '../types/kf';
import { useState, useMemo, useEffect } from 'react';
import { debounce } from './useDebounce';
import { getRandomDrinks } from '../../../backend/controller/logic';
// import { getRandomDrinks } from '@backend/controller/logic';

// Add id to KFTea
interface customKFTea extends KFTea {
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
		console.log('recipesCount', recipesCount);
		const getDrinks = getRandomDrinks(recipesCount || 10);
		console.log('getDrinks', getDrinks.length);
		setDrinks(prev => getDrinks);
	}, [recipesCount]);

	const filteredRecipes: customKFTea[] = useMemo(() => {
		return drinks.filter((recipe: KFTea) => {
			return recipe.name.toLowerCase().includes(search.toLowerCase());
		});
	}, [search, drinks]);

	return {
		updateSearch,
		recipes: filteredRecipes,
	};
}
