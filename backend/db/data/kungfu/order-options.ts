/**
 * file contains arrays of strings representing different drink options.
 */

import { KF_TEA_LIST } from '.';

// 1. Kien
//
// Kiên chỉnh sửa file seeds/order.ts thành file data/drinkData.ts để sử dụng dữ liệu trong các method của controller/logic.ts.
// Lượt bỏ file orderTypes.ts strong scheme cho ngắn gọn.
//

export const toppings: string[] = [
  'Brown sugar pearl',
  'grass jelly',
  'basil seeds',
  'pudding',
  'cheese milk form',
  'ice cream',
  'agar jelly',
  'coco jelly',
  'red bean',
  'aloe vera',
  'coffee jelly',
  'agar bubble',
  'strawberry popping boba',
  'mango popping boba',
  'lychee popping boba',
];

export const milks: string[] = [
  'regular milk',
  'lactose free milk',
  'almond milk',
  'soy milk',
];

export const sweetnessLevels: string[] = [
  'No sweet (0%)',
  'Little (30%)',
  'Half (50%)',
  'Less (70%)',
  'Standard (100%)',
  'More (120%)',
];

export const iceLevels: string[] = [
  'Standard (100%)',
  'Less ice (30%)',
  'No ice (0%)',
];

export const cupSizes: string[] = ['Large', 'Regular'];

export const drinksWithoutMilk: string[] = [
  'CMF Green Tea',
  'CMF Black Tea',
  'CMF Oolong Tea',
  'CMF Rose',
  'CMF Mango',
  'CMF Chocolate',
  'CMF Matcha',
  'Signature Lite Fruit Tea',
  'Mango Fruit Tea',
  'Passion Fruit Green Tea',
  'Jin Xuan Oolong Tea',
  'Assam Black Tea',
  'Jasmine Green Tea',
  'Winter Melon Drink',
  'Rose Oolong Tea',
  'Grape Fruit Green Tea with Agar BB',
  'Winter Melon with Lemon',
  'Honey Lemon with Aloe Vera',
  'Passion Fruit with basil seeds',
  'Passion fruit QQ',
  'Yakult Green Tea with Aloe Vera',
  'Pearl Milk Green Tea with Taro',
  'Coffee Milk Tea',
  'Matcha Milk Tea with Red bean',
];
export const allDrinks = KF_TEA_LIST.filter((tea) => tea.availability).map(
  (tea) => tea.name
);
export const drinksWithMilk: string[] = [
  'Pearl Latte with Brown Sugar',
  'Black Tea Latte',
  'Chocolate Latte',
  'Pearl Matcha Latte',
  'Pearl Taro Latte',
  'Power Taro Pudding Pearl Milk',
  'Taro Sago',
];
