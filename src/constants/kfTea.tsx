const CMF = [
  'Green Tea',
  'Black Tea',
  'Oolong Tea',
  'Rose',
  'Mango',
  'Chocolate',
  'Matcha',
].map((tea) => 'CMF ' + tea);

const ORIGINAL = [
  'Jin Xuan Oolong Tea',
  'Assam Black Tea',
  'Jasmine Green Tea',
  'Winter Melon Drink',
  'Power Taro Pudding Pearl Milk',
  'Taro Sago',
];

const LATTE = [
  'Pearl Latte with Brown Sugar',
  'Black Tea Latte',
  'Chocolate Latte',
  'Pearl Matcha Latte',
  'Pearl Taro Latte',
];

const UNCATEGORIZED = [
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

export const KF_TEA_LIST = CMF.concat(
  ORIGINAL,
  LATTE,
  UNCATEGORIZED,
  FRUIT,
  MILK_TEA
);
