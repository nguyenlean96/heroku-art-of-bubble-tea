import { FluidUnit, KFTeaDrink, Label, WeightUnit, PowderUnit } from '../types/kf';

export const UNCATEGORIZED_NEW: KFTeaDrink[] = [
  {
    name: 'Power Taro Pudding Pearl Milk',
    availability: true,
    note: 'Pearl Pudding Taro: 80 + 100 + 160',
    recipes: [
      {
        syrup: null,
        tea: null,
        water: null,
        milk: [
          {
            value: 200,
            unit: FluidUnit.ml,
          },
        ],
        honey: null,
        powder: null,
      },
    ],
  },
  {
    name: 'Taro Sago',
    availability: true,
    note: 'Sago + Taro: 130 - 160g',
    recipes: [
      {
        syrup: null,
        tea: null,
        water: null,
        milk: [
          {
            value: 200,
            unit: FluidUnit.ml,
          },
        ],
        honey: [
          {
            value: 0.3,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
    ],
  },
  {
    name: 'Rose Oolong Tea',
    availability: true,
    note: null,
    recipes: [
      {
        syrup: [
          {
            value: 72,
            unit: WeightUnit.g,
          },
        ],
        tea: [
          {
            value: 280,
            unit: FluidUnit.ml,
            note: 'Olong Tea',
          },
        ],
        water: [
          {
            value: 60,
            unit: FluidUnit.ml,
            note: 'hot',
          },
        ],
        milk: null,
        honey: null,
        powder: null,
      },
      {
        syrup: [
          {
            value: 54,
            unit: WeightUnit.g,
          },
        ],
        tea: [
          {
            value: 200,
            unit: FluidUnit.ml,
            note: 'Olong Tea',
          },
        ],
        water: [
          {
            value: 40,
            unit: FluidUnit.ml,
            note: 'hot',
          },
        ],
        milk: null,
        honey: null,
        powder: null,
      },
      {
        syrup: [
          {
            value: 44,
            unit: WeightUnit.g,
          },
        ],
        tea: [
          {
            value: 160,
            unit: FluidUnit.ml,
            note: 'Olong Tea',
          },
        ],
        water: [
          {
            value: 20,
            unit: FluidUnit.ml,
            note: 'hot',
          },
        ],
        milk: null,
        honey: null,
        powder: null,
      },
    ],
  },
  {
    name: 'Grape Fruit Green Tea with Agar BB',
    availability: true,
    note: '1 buoi Agar BB: 100-80g',
    recipes: [
      {
        syrup: [
          {
            value: 2,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 200,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 0.3,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 160,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 0.2,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 1,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 120,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 0.1,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
    ],
  },
  {
    name: 'Winter Melon with Lemon',
    availability: false,
    note: '1 lime',
    recipes: [
      {
        syrup: [
          {
            value: 1.5,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 380,
            unit: FluidUnit.ml,
            note: 'Winter Melon Tea',
          },
        ],
        water: null,
        milk: null,
        honey: null,
        powder: null,
      },
      {
        syrup: [
          {
            value: 1,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 280,
            unit: FluidUnit.ml,
            note: 'Winter Melon Tea',
          },
        ],
        water: null,
        milk: null,
        honey: null,
        powder: null,
      },
      {
        syrup: [
          {
            value: 0.5,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 200,
            unit: FluidUnit.ml,
            note: 'Winter Melon Tea',
          },
        ],
        water: null,
        milk: null,
        honey: null,
        powder: null,
      },
    ],
  },
  {
    name: 'Honey Lemon with Aloe Vera',
    availability: true,
    note: 'Aloe Vera: 80-65g',
    recipes: [
      {
        syrup: [
          {
            value: 1.5,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 160,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: [
          {
            value: 60,
            unit: FluidUnit.ml,
          },
        ],
        milk: null,
        honey: [
          {
            value: 1.6,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 1,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 120,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: [
          {
            value: 40,
            unit: FluidUnit.ml,
          },
        ],
        milk: null,
        honey: [
          {
            value: 1.2,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 0.5,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 100,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: [
          {
            value: 20,
            unit: FluidUnit.ml,
          },
        ],
        milk: null,
        honey: [
          {
            value: 1,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
    ],
  },
  {
    name: 'Passion Fruit with Basil Seeds',
    availability: true,
    note: null,
    recipes: [
      {
        syrup: [
          {
            value: 3,
            unit: FluidUnit.oz,
            note: 'Passion Fruit',
          },
          {
            value: 160,
            unit: FluidUnit.ml,
            note: 'Basil Seeds',
          },
        ],
        tea: null,
        water: [
          {
            value: 180,
            unit: FluidUnit.ml,
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.4,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 2,
            unit: FluidUnit.oz,
            note: 'Passion Fruit',
          },
          {
            value: 120,
            unit: FluidUnit.ml,
            note: 'Basil Seeds',
          },
        ],
        tea: null,
        water: [
          {
            value: 140,
            unit: FluidUnit.ml,
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.3,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: FluidUnit.oz,
            note: 'Passion Fruit',
          },
          {
            value: 80,
            unit: FluidUnit.ml,
            note: 'Basil Seeds',
          },
        ],
        tea: null,
        water: [
          {
            value: 100,
            unit: FluidUnit.ml,
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.2,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
    ],
  },
  {
    name: 'Passion Fruit QQ',
    availability: true,
    note: 'Pearl/Agar J/Coconut J: 80/50/50 60/40/40',
    recipes: [
      {
        syrup: [
          {
            value: 2,
            unit: FluidUnit.oz,
            note: 'Passion Fruit',
          },
        ],
        tea: null,
        water: [
          {
            value: 220,
            unit: FluidUnit.ml,
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.3,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: FluidUnit.oz,
            note: 'Passion Fruit',
          },
        ],
        tea: null,
        water: [
          {
            value: 160,
            unit: FluidUnit.ml,
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.2,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 1,
            unit: FluidUnit.oz,
            note: 'Passion Fruit',
          },
        ],
        tea: null,
        water: [
          {
            value: 120,
            unit: FluidUnit.ml,
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.1,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
    ],
  },
  {
    name: 'Yakult Green Tea with Aloe Vera',
    availability: true,
    note: 'Aloe Vera: 80-65g',
    recipes: [
      {
        syrup: [
          {
            value: 2,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 220,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 1.2,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 160,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 0.9,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 1,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 120,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 0.7,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
    ],
  },
  {
    name: 'Pearl Milk Green Tea with Taro',
    availability: true,
    note: 'Pearl + Taro: 100 + 100g/80 + 80g',
    recipes: [
      {
        syrup: null,
        tea: [
          {
            value: 160,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 0.4,
            unit: FluidUnit.honey,
          },
        ],
        powder: [
          {
            value: PowderUnit.med,
            unit: PowderUnit.med,
            note: 'milk powder',
          },
        ],
      },
      {
        syrup: [
          {
            value: PowderUnit.sm,
            unit: PowderUnit.sm,
            note: 'milk powder',
          },
        ],
        tea: [
          {
            value: 120,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 0.6,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
    ],
  },
  {
    name: 'Coffe Milk Tea',
    availability: true,
    note: null,
    recipes: [
      {
        syrup: [
          {
            value: 3.5,
            unit: FluidUnit.oz,
            note: 'Coffee',
          },
        ],
        tea: [
          {
            value: 120,
            unit: FluidUnit.ml,
            note: 'Black Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 1.2,
            unit: FluidUnit.honey,
          },
        ],
        powder: [
          {
            value: 'large',
            unit: PowderUnit.lg,
            note: 'milk powder',
          },
        ],
      },
      {
        syrup: [
          {
            value: 3,
            unit: FluidUnit.oz,
            note: 'Coffee',
          },
        ],
        tea: [
          {
            value: 100,
            unit: FluidUnit.ml,
            note: 'Black Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 1,
            unit: FluidUnit.honey,
          },
        ],
        powder: [
          {
            value: PowderUnit.med,
            unit: PowderUnit.med,
            note: 'milk powder',
          },
        ],
      },
      {
        syrup: [
          {
            value: 2.5,
            unit: FluidUnit.oz,
            note: 'Coffee',
          },
        ],
        tea: [
          {
            value: 80,
            unit: FluidUnit.ml,
            note: 'Black Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 0.8,
            unit: FluidUnit.honey,
          },
        ],
        powder: [
          {
            value: PowderUnit.sm,
            unit: PowderUnit.sm,
            note: 'milk powder',
          },
        ],
      },
    ],
  },
  {
    name: 'Matcha Milk Tea with Redbean',
    availability: true,
    note: 'Red Bean: 80-65g',
    recipes: [
      {
        syrup: null,
        tea: null,
        water: [
          {
            value: 140,
            unit: FluidUnit.ml,
            note: 'hot',
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.6,
            unit: FluidUnit.honey,
          },
        ],
        powder: [
          {
            value: 34,
            unit: WeightUnit.g,
            note: 'Matcha',
          },
          {
            value: PowderUnit.sm,
            unit: PowderUnit.sm,
            note: 'Milk Powder',
          },
        ],
      },
      {
        syrup: null,
        tea: null,
        water: [
          {
            value: 120,
            unit: FluidUnit.ml,
            note: 'hot',
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.4,
            unit: FluidUnit.honey,
          },
        ],
        powder: [
          {
            value: 26,
            unit: WeightUnit.g,
            note: 'Matcha',
          },
          {
            value: 2,
            unit: PowderUnit.ts,
            note: 'Milk Powder',
          },
        ],
      },
      {
        syrup: null,
        tea: null,
        water: [
          {
            value: 80,
            unit: FluidUnit.ml,
            note: 'hot',
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.3,
            unit: FluidUnit.honey,
          },
        ],
        powder: [
          {
            value: 22,
            unit: WeightUnit.g,
            note: 'Matcha',
          },
          {
            value: 1.5,
            unit: PowderUnit.ts,
            note: 'Milk Powder',
          },
        ],
      },
    ],
  },
];