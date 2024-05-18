import { KFTeaDrink } from "@backend/types/kf";

export const FRUIT: KFTeaDrink[] = [
  {
    name: 'Signature Lite Fruit Tea',
    label: ['COLD'],
    availability: true,
    note: '1 Grape F + 3/2 Orange + 3/2 Apple',
    recipes: [
      {
        syrup: [
          {
            value: 2,
            unit: 'oz',
            note: 'Lite',
          },
          {
            value: 100,
            unit: 'ml',
            note: 'Basil Seeds',
          },
        ],
        tea: [
          {
            value: 140,
            unit: 'ml',
            note: 'Olong Tea',
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
            value: 0.5,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: 'oz',
            note: 'Lite',
          },
          {
            value: 80,
            unit: 'ml',
            note: 'Basil Seeds',
          },
        ],
        tea: [
          {
            value: 100,
            unit: 'ml',
            note: 'Olong Tea',
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
            value: 0.4,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 1,
            unit: 'oz',
            note: 'Lite',
          },
          {
            value: 60,
            unit: 'ml',
            note: 'Basil Seeds',
          },
        ],
        tea: [
          {
            value: 80,
            unit: 'ml',
            note: 'Olong Tea',
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
            value: 0.3,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Mango Fruit Tea',
    label: ['COLD'],
    availability: true,
    recipes: [
      {
        syrup: [
          {
            value: 86,
            unit: 'g',
          },
        ],
        tea: [
          {
            value: 240,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 0.5,
            unit: 'honey',
          },
        ],
      },
      {
        syrup: [
          {
            value: 64,
            unit: 'g',
          },
        ],
        tea: [
          {
            value: 180,
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
            value: 54,
            unit: 'g',
          },
        ],
        tea: [
          {
            value: 140,
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
    ],
  },
  {
    name: 'Passion Fruit Green Tea',
    availability: true,
    label: ['COLD'],
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
            value: 240,
            unit: 'ml',
            note: 'Green Tea',
          },
        ],

        honey: [
          {
            value: 0.8,
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
            value: 180,
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
      {
        syrup: [
          {
            value: 1,
            unit: 'oz',
          },
        ],
        tea: [
          {
            value: 140,
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
      },
    ],
  },
];
