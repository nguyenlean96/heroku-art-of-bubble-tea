/**
 * logic.ts file implement the logic for generating random drink orders.
 */
import {
	toppings,
	milks,
	sweetnessLevels,
	iceLevels,
	cupSizes,
	drinksWithoutMilk,
	drinksWithMilk,
} from '../db/data/drinkData';

// 2. Kien
//
// Kien chỉnh sửa lại file queries/order.ts thành controller/logic.ts để sử dụng dữ liệu từ data/drinkData.ts.
// Mục đích để tạo ra 1 order ngẫu nhiên từ 3 methods: getRandomItem(), getRandomToppings(), generateRandomDrink()

/**
 * getRandomItem() is a utility function used to retrieve a random item from an array of strings.
 * @param arr An array of strings from which to select a random item.(data from drinkData.ts)
 * @returns A random item from the provided array.
 */
export const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

/**
 * getRandomToppings() is a function used to generate a random selection of toppings for a drink.
 * Toppings are selected from the 'toppings' array in 'drinkData.ts'.
 * numToppings determines the number of toppings to be selected, ranging from 1 to 10.
 * @returns An array of randomly selected unique toppings.
 */
export const getRandomToppings = () => {
	const numToppings = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10 (defines the number of toppings)
	const uniqueToppings = new Set<string>(); // Use a Set<string>() to ensure no duplicate toppings

	// while uniqueToppings size is less than numToppings, keep adding a random topping until it reaches numToppings
	while (uniqueToppings.size < numToppings) {
		uniqueToppings.add(getRandomItem(toppings));
	}

	return Array.from(uniqueToppings);
};

/**
 * Generate a random drink order containing the following properties: name, milk, sweetness, ice, cupSize, toppings
 * If the drink contains milk, a random milk type is selected from the 'milks' array in 'drinkData.ts'.
 * If the drink does not contain milk, the milk property is set to undefined or null.
 * @returns A randomly generated drink object.
 */
export const generateRandomDrink = (drinkName: string = '') => {
	let withMilk = null;
	if (!drinkName) {
		withMilk = Math.random() < 0.5; // 50% chance of having milk

		drinkName = withMilk
			? getRandomItem(drinksWithMilk)
			: getRandomItem(drinksWithoutMilk);
	} else {
		withMilk = drinksWithMilk.includes(drinkName);
	}

	const sweetness = getRandomItem(sweetnessLevels);
	const ice = getRandomItem(iceLevels);
	const cupSize = getRandomItem(cupSizes);
	const toppings = getRandomToppings();

	// Construct the drink object with or without the note based on the condition
	const drinkObject: any = {
		name: drinkName,
		sweetness: sweetness,
		ice: ice,
		cupSize: cupSize,
		toppings: toppings,
		milk: withMilk ? getRandomItem(milks) : 'No milks',
	};

	// Add a note for the the drink
	if (drinkName === 'Pearl Taro Latte') {
		drinkObject['note'] = 'Pearl + Taro: 100 + 120g 80 _ 90g. If no pearls, Taro: 160-120g, if no pearls, add extra 40ml milk';
	} else if (drinkName === 'CMF Chocolate') {
		drinkObject['note'] = 'steam';
	} else if (drinkName === 'CMF Matcha') {
		drinkObject['note'] = 'cold then steam';
	} else if (drinkName === 'Winter Melon Drink') {
		drinkObject['note'] = 'tea: 380 (40ml water)-300-240ml';
	} else if (drinkName === 'Pearl Latte with Brown Sugar') {
		drinkObject['note'] = 'Pearl 180-120';
	} else if (drinkName === 'Black Tea Latte') {
		drinkObject['note'] = 'Can change to green tea or Oolong';
	} else if (drinkName === 'Power Taro Pudding Pearl Milk') {
		drinkObject['note'] = 'Pearl Pudding Taro: 80 + 100 + 160';
	} else if (drinkName === 'Taro Sago') {
		drinkObject['note'] = 'Sago + Taro: 130 - 160g';
	} else if (drinkName === 'Rose Oolong Tea') {
		drinkObject['note'] = 'hot';
	} else if (drinkName === 'Grape Fruit Green Tea with Agar BB') {
		drinkObject['note'] = '1 buoi Agar BB: 100-80g';
	} else if (drinkName === 'Winter Melon with Lemon') {
		drinkObject['note'] = 'Winter Melon Tea, and 1 lime';
	} else if (drinkName === 'Honey Lemon with Aloe Vera') {
		drinkObject['note'] = 'Green Tea, Aloe Vera: 65g-80g';
	} else if (drinkName === 'Passion Fruit QQ') {
		drinkObject['note'] = 'Pearl/Agar J/Coconut J: 80/50/50 60/40/40';
	} else if (drinkName === 'Yakult Green Tea with Aloe Vera') {
		drinkObject['note'] = 'Aloe Vera: 65g-80g';
	} else if (drinkName === 'Pearl Milk Green Tea with Taro') {
		drinkObject['note'] = 'milk powder, green tea, Pearl + Taro: 100 + 100g/80 + 80g';
	} else if (drinkName === 'Coffe Milk Tea') {
		drinkObject['note'] = 'milk powder, black tea, coffee';
	} else if (drinkName === 'Matcha Milk Tea with Redbean') {
		drinkObject['note'] = 'milk powder, matcha, hot, red bean: 65g-80g';
	} else if (drinkName === 'Signature Lite Fruit Tea') {
		drinkObject['note'] = 'Lite syrup, Basil Seeds, Oolong tea, 1 Grape F + 3/2 Orange + 3/2 Apple';
	} else if (drinkName === 'Mango Fruit Tea') {
		drinkObject['note'] = 'green tea';
	}
	return drinkObject;
};

export const getRandomDrinks = (numDrinks: number) => {
	// Concatenate the drinksWithoutMilk and drinksWithMilk arrays to get all drink names
	const drinks = drinksWithMilk.concat(drinksWithoutMilk);

	const randomDrinks = drinks.sort(() => 0.5 - Math.random()).slice(0, numDrinks);

	// Generate a random drink order for each drink name
	const drinkOrders = randomDrinks.map((drink, index) => {
		// Check whether the drink contains milk
		return generateRandomDrink(drink);
	});

	return drinkOrders;
};
