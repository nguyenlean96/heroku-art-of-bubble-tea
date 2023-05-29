import { KFTea } from '../types/kftea';

const CMF: KFTea[] = [
  {
    name: 'CMF Green Tea',
    syrup: null,
    tea: '240 - 180 - 140 ml',
    water: null,
    honey: '1.2 - 0.9 - 0.7',
    note: null,
  },
  {
    name: 'CMF Black Tea',
    syrup: null,
    tea: 'Black Tea: 180 - 140 - 100 ml',
    water: '60 -40 -20 ml',
    honey: '1.2 - 0.9 - 0.7',
    note: null,
  },
  {
    name: 'CMF Oolong Tea',
    syrup: null,
    tea: '300 - 220 - 180 ml',
    water: null,
    honey: '1.0 - 0.8 - 0.6',
    note: null,
  },
  {
    name: 'CMF Rose',
    syrup: '54 - 44 - 34g',
    tea: '200 - 160 - 120 ml',
    water: null,
    honey: null,
    note: null,
  },
  {
    name: 'CMF Mango',
    syrup: '64 - 54 - 44g',
    tea: 'Green Tea: 180 - 140 - 100 ml',
    water: null,
    honey: '0.3 - 0.2 - 0.1',
    note: null,
  },
  {
    name: 'CMF Chocolate',
    syrup: '3ts 2ts 1,5ts',
    tea: null,
    water: '140 - 100 - 80ml (steam)',
    honey: '0.6 - 0.4 - 0.3',
    note: null,
  },
  {
    name: 'CMF Matcha',
    syrup: 'Match: 34 - 26 - 22g',
    tea: null,
    water: '140 - 100 - 80ml (steam)',
    honey: '0.6 - 0.4 - 0.3',
    note: null,
  },
];

const ORIGINAL: KFTea[] = [
  {
    name: 'Jin Xuan Oolong Tea',
    syrup: null,
    tea: '360-260-200ml',
    water: null,
    honey: '1.2-0.9-0.7',
    note: null,
  },
  {
    name: 'Assam Black Tea',
    syrup: null,
    tea: '180-140-100ml',
    water: '100-80-60ml',
    honey: '1.5-1.2-1.0',
    note: null,
  },
  {
    name: 'Jasmine Green Tea',
    syrup: null,
    tea: '280-200-160ml',
    water: null,
    honey: '1.4-1.0-0.8',
    note: null,
  },
  {
    name: 'Winter Melon Drink',
    syrup: null,
    tea: '380 (40ml water)-300-240ml',
    water: null,
    honey: null,
    note: null,
  },
];

const LATTE = [
  {
    name: 'Pearl Latte with Brown Sugar',
    syrup: null,
    tea: '300-200ml',
    water: null,
    honey: null,
    note: 'Pearl 180-120',
  },
  {
    name: 'Black Tea Latte',
    syrup: null,
    tea: '160-120-100ml',
    milk: '180-140-120',
    water: null,
    honey: '1.4-1.0-0.8',
    note: 'Can change to green tea or Oolong',
  },
  {
    name: 'Chocolate Latte',
    syrup: '3ts 2ts 1ts',
    tea: null,
    water: '100-80-60',
    honey: '0.6-0.4-0.3',
    note: null,
  },
];
const LATTE1 = [
  'Pearl Latte with Brown Sugar',
  'Black Tea Latte',
  'Chocolate Latte',
  'Pearl Matcha Latte',
  'Pearl Taro Latte',
];

const UNCATEGORIZED = [
  {
    name: 'Power Taro Pudding Pearl Milk',
    syrup: null,
    tea: 'Milk: 200ml',
    water: null,
    honey: null,
    note: 'Pearl Pudding Taro: 80 + 100 + 160',
  },
  {
    name: 'Taro Sago',
    syrup: null,
    tea: 'Milk: 200ml',
    water: null,
    honey: '0.3',
    note: 'Sago + Taro: 130 - 160g',
  },
];
const UNCATEGORIZED1 = [
  'Rose Oolong Tea',
  'Grape Fruit Green Tea with Agar BB',
  'Winter Melon with Lemon',
  'Honey Lemon with Aloe Vera',
  'Passion Fruit with Basil Seeds',
  'Passion Fruit QQ',
  'Yakult Green Tea with Aloe Vera',
  // ------------------------
  'Pearl Milk Green Tea with Taro',
  'Coffe Milk Tea',
  'Matcha Milk Tea with Redbean',
];

const FRUIT = [
  'Signature Lite Fruit Tea',
  'Manga Fruit Tea',
  'Passion Fruit Green Tea',
  'Cranberry Green Tea',
  'Plum Green Tea',
  'Special Plum Juice',
  'Lychee Ice Tea',
];

const MILK_TEA = [
  '38 Milk King',
  'Original Milk Tea',
  'Green Milk Tea',
  'Oolong Milk Tea',
  'Chocolate Milk Tea',
  'Kungfu Ginger Milk Tea',
  'Rose Milk Tea',
];

export const KF_TEA_LIST = CMF.concat(ORIGINAL, LATTE, UNCATEGORIZED);
