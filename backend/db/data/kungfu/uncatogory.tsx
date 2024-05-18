import { KFTeaDrink } from "@backend/types/kf";

export const UNCATEGORIZED: KFTeaDrink[] = [
  {
    name: 'Power Taro Pudding Pearl Milk',
    label: ['COLD'],
    availability: true,
    note: 'Pearl Pudding Taro: 80 + 100 + 160',
    recipes: [
      {
        milk: [
          {
            value: 200,
            unit: 'ml',
          },
        ],
      },
    ],
  },
  {
    name: 'Taro Sago',
    label: ['COLD'],
    availability: true,
    note: 'Sago + Taro: 130 - 160g',
    recipes: [
      {
        milk: [
          {
            value: 200,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Rose Oolong Tea',
    availability: true,
    label: ['COLD'],
    recipes: [
      {
        syrup: [
          {
            value: 72,
            unit: 'g',
          },
        ],
        tea: [
          {
            value: 280,
            unit: 'ml',
            note: 'Olong Tea',
          },
        ],
        water: [
          {
            value: 60,
            unit: 'ml',
            note: 'hot',
          },
        ],
      },
      {
        syrup: [
          {
            value: 54,
            unit: 'g',
          },
        ],
        tea: [
          {
            value: 200,
            unit: 'ml',
            note: 'Olong Tea',
          },
        ],
        water: [
          {
            value: 40,
            unit: 'ml',
            note: 'hot',
          },
        ],
      },
      {
        syrup: [
          {
            value: 44,
            unit: 'g',
          },
        ],
        tea: [
          {
            value: 160,
            unit: 'ml',
            note: 'Olong Tea',
          },
        ],
        water: [
          {
            value: 20,
            unit: 'ml',
            note: 'hot',
          },
        ],
      },
    ],
  },
  {
    name: 'Grape Fruit Green Tea with Agar BB',
    label: ['COLD'],
    availability: true,
    note: '1 buoi Agar BB: 100-80g',
    recipes: [
      {
        syrup: [
          {
            value: 2,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 200,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 160,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 0.2,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 120,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 0.1,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Winter Melon with Lemon',
    label: ['COLD'],
    availability: false,
    note: '1 lime',
    recipes: [
      {
        syrup: [
          {
            value: 1.5,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 380,
            unit: 'ml',
            note: 'Winter Melon Tea',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 280,
            unit: 'ml',
            note: 'Winter Melon Tea',
          },
        ],
      },
      {
        syrup: [
          {
            value: 0.5,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 200,
            unit: 'ml',
            note: 'Winter Melon Tea',
          },
        ],
      },
    ],
  },
  {
    name: 'Honey Lemon with Aloe Vera',
    label: ['COLD'],
    availability: true,
    note: 'Aloe Vera: 80-65g',
    recipes: [
      {
        syrup: [
          {
            value: 1.5,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 160,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],
        water: [
          {
            value: 60,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 1.6,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 120,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],
        water: [
          {
            value: 40,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 1.2,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 0.5,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 100,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],
        water: [
          {
            value: 20,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 1,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Passion Fruit with Basil Seeds',
    availability: true,
    label: ['COLD'],
    recipes: [
      {
        syrup: [
          {
            value: 3,
            unit: 'oz',
            note: 'Passion Fruit',
          },
          {
            value: 160,
            unit: 'ml',
            note: 'Basil Seeds',
          },
        ],

        water: [
          {
            value: 180,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 0.4,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 2,
            unit: 'oz',
            note: 'Passion Fruit',
          },
          {
            value: 120,
            unit: 'ml',
            note: 'Basil Seeds',
          },
        ],

        water: [
          {
            value: 140,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: 'oz',
            note: 'Passion Fruit',
          },
          {
            value: 80,
            unit: 'ml',
            note: 'Basil Seeds',
          },
        ],

        water: [
          {
            value: 100,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 0.2,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Passion Fruit QQ',
    label: ['COLD'],
    availability: true,
    note: 'Pearl/Agar J/Coconut J: 80/50/50 60/40/40',
    recipes: [
      {
        syrup: [
          {
            value: 2,
            unit: 'oz',
            note: 'Passion Fruit',
          },
        ],

        water: [
          {
            value: 220,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: 'oz',
            note: 'Passion Fruit',
          },
        ],

        water: [
          {
            value: 160,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 0.2,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1,
            unit: 'oz',
            note: 'Passion Fruit',
          },
        ],

        water: [
          {
            value: 120,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 0.1,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Yakult Green Tea with Aloe Vera',
    label: ['COLD'],
    availability: true,
    note: 'Aloe Vera: 80-65g',
    recipes: [
      {
        syrup: [
          {
            value: 2,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 220,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 1.2,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 160,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 0.9,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 120,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 0.7,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Pearl Milk Green Tea with Taro',
    label: ['COLD'],
    availability: true,
    note: 'Pearl + Taro: 100 + 100g/80 + 80g',
    recipes: [
      {
        tea: [
          {
            value: 160,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 0.4,
            unit: 'honey',
          },
        ],
        powder: [
          {
            value: 'med',
            unit: 'med',
            note: 'milk powder',
          },
        ],
      },
      {
        syrup: [
          {
            value: 'sm',
            unit: 'sm',
            note: 'milk powder',
          },
        ],
        tea: [
          {
            value: 120,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 0.6,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Coffe Milk Tea',
    availability: true,
    label: ['COLD'],
    recipes: [
      {
        syrup: [
          {
            value: 3.5,
            unit: 'oz',
            note: 'Coffee',
          },
        ],
        tea: [
          {
            value: 120,
            unit: 'ml',
            note: 'Black Tea',
          },
        ],

        honey: [
          {
            value: 1.2,
            unit: 'honey',
          },
        ],
        powder: [
          {
            value: 'large',
            unit: 'lg',
            note: 'milk powder',
          },
        ],
      },
      {
        syrup: [
          {
            value: 3,
            unit: 'oz',
            note: 'Coffee',
          },
        ],
        tea: [
          {
            value: 100,
            unit: 'ml',
            note: 'Black Tea',
          },
        ],

        honey: [
          {
            value: 1,
            unit: 'honey',
          },
        ],
        powder: [
          {
            value: 'med',
            unit: 'med',
            note: 'milk powder',
          },
        ],
      },
      {
        syrup: [
          {
            value: 2.5,
            unit: 'oz',
            note: 'Coffee',
          },
        ],
        tea: [
          {
            value: 80,
            unit: 'ml',
            note: 'Black Tea',
          },
        ],

        honey: [
          {
            value: 0.8,
            unit: 'honey',
          },
        ],
        powder: [
          {
            value: 'sm',
            unit: 'sm',
            note: 'milk powder',
          },
        ],
      },
    ],
  },
  {
    name: 'Matcha Milk Tea with Redbean',
    label: ['COLD'],
    availability: true,
    note: 'Red Bean: 80-65g',
    recipes: [
      {
        water: [
          {
            value: 140,
            unit: 'ml',
            note: 'hot',
          },
        ],

        honey: [
          {
            value: 0.6,
            unit: 'honey',
          },
        ],
        powder: [
          {
            value: 34,
            unit: 'g',
            note: 'Matcha',
          },
          {
            value: 'sm',
            unit: 'sm',
            note: 'Milk Powder',
          },
        ],
      },
      {
        water: [
          {
            value: 120,
            unit: 'ml',
            note: 'hot',
          },
        ],

        honey: [
          {
            value: 0.4,
            unit: 'honey',
          },
        ],
        powder: [
          {
            value: 26,
            unit: 'g',
            note: 'Matcha',
          },
          {
            value: 2,
            unit: 'ts',
            note: 'Milk Powder',
          },
        ],
      },
      {
        water: [
          {
            value: 80,
            unit: 'ml',
            note: 'hot',
          },
        ],

        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],
        powder: [
          {
            value: 22,
            unit: 'g',
            note: 'Matcha',
          },
          {
            value: 1.5,
            unit: 'ts',
            note: 'Milk Powder',
          },
        ],
      },
    ],
  },
];
