import { KFTeaDrink } from "@backend/types/kf";

export const CMF: KFTeaDrink[] = [
  {
    name: 'CMF Green Tea',
    availability: true,
    recipes: [
      {
        tea: [
          {
            value: 240,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 1.2,
            unit: 'honey',
          },
        ],
        type: 'Standard',
      },
      {
        tea: [
          {
            value: 180,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.9,
            unit: 'honey',
          },
        ],
        type: 'Medium',
      },
      {
        tea: [
          {
            value: 140,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.7,
            unit: 'honey',
          },
        ],
        type: 'Small',
      },
    ],
    label: ['COLD'],
  },
  {
    name: 'CMF Black Tea',
    availability: true,
    recipes: [
      {
        tea: [
          {
            value: 180,
            unit: 'ml',
            note: 'Black Tea',
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
            value: 1.2,
            unit: 'honey',
          },
        ],
        type: 'Standard',
      },
      {
        tea: [
          {
            value: 140,
            unit: 'ml',
            note: 'Black Tea',
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
            value: 0.9,
            unit: 'honey',
          },
        ],
        type: 'Medium',
      },
      {
        tea: [
          {
            value: 100,
            unit: 'ml',
            note: 'Black Tea',
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
            value: 0.7,
            unit: 'honey',
          },
        ],
        type: 'Small',
      },
    ],
    label: ['COLD'],
  },
  {
    name: 'CMF Oolong Tea',
    availability: true,
    recipes: [
      {
        tea: [
          {
            value: 300,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 1,
            unit: 'honey',
          },
        ],
        type: 'Standard',
      },
      {
        tea: [
          {
            value: 220,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.8,
            unit: 'honey',
          },
        ],
        type: 'Medium',
      },
      {
        tea: [
          {
            value: 180,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.6,
            unit: 'honey',
          },
        ],
        type: 'Small',
      },
    ],
    label: ['COLD'],
  },
  {
    name: 'CMF Rose',
    availability: true,
    recipes: [
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
          },
        ],
        type: 'Standard',
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
          },
        ],
        type: 'Medium',
      },
      {
        syrup: [
          {
            value: 34,
            unit: 'g',
          },
        ],
        tea: [
          {
            value: 120,
            unit: 'ml',
          },
        ],
        type: 'Small',
      },
    ],
    label: ['COLD'],
  },
  {
    name: 'CMF Mango',
    availability: true,
    note: 'Green tea',
    recipes: [
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
          },
        ],
        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],
        type: 'Standard',
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
          },
        ],
        honey: [
          {
            value: 0.2,
            unit: 'honey',
          },
        ],
        type: 'Medium',
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
            value: 100,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.1,
            unit: 'honey',
          },
        ],
        type: 'Small',
      },
    ],
    label: ['COLD'],
  },
  {
    name: 'CMF Chocolate',
    availability: true,
    recipes: [
      {
        syrup: [
          {
            value: 3,
            unit: 'ts',
          },
        ],
        water: [
          {
            value: 140,
            unit: 'ml',
            note: 'steam',
          },
        ],
        honey: [
          {
            value: 0.6,
            unit: 'honey',
          },
        ],
        type: 'Standard',
      },
      {
        syrup: [
          {
            value: 2,
            unit: 'ts',
          },
        ],
        water: [
          {
            value: 100,
            unit: 'ml',
            note: 'steam',
          },
        ],
        honey: [
          {
            value: 0.4,
            unit: 'honey',
          },
        ],
        type: 'Medium',
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: 'ts',
          },
        ],
        water: [
          {
            value: 80,
            unit: 'ml',
            note: 'steam',
          },
        ],
        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],
        type: 'Small',
      },
    ],
    label: ['COLD'],
  },
  {
    name: 'CMF Matcha',
    availability: true,
    recipes: [
      {
        syrup: [
          {
            value: 34,
            unit: 'g',
          },
        ],
        water: [
          {
            value: 140,
            unit: 'ml',
            note: 'cold then steam',
          },
        ],
        honey: [
          {
            value: 0.6,
            unit: 'honey',
          },
        ],
        type: 'Standard',
      },
      {
        syrup: [
          {
            value: 26,
            unit: 'g',
          },
        ],
        water: [
          {
            value: 100,
            unit: 'ml',
            note: 'cold then steam',
          },
        ],
        honey: [
          {
            value: 0.4,
            unit: 'honey',
          },
        ],
        type: 'Medium',
      },
      {
        syrup: [
          {
            value: 22,
            unit: 'g',
          },
        ],
        water: [
          {
            value: 80,
            unit: 'ml',
            note: 'cold then steam',
          },
        ],
        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],
        type: 'Small',
      },
    ],
    label: ['COLD'],
  },
];
