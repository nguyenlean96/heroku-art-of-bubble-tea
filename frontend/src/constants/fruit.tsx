import { FluidUnit, KFTeaDrink, WeightUnit } from '../types/kf';

export const FRUIT_NEW: KFTeaDrink[] = [
  {
    name: 'Signature Lite Fruit Tea',
    availability: true,
    note: '1 Grape F + 3/2 Orange + 3/2 Apple',
    recipes: [
      {
        syrup: [
          {
            value: 2,
            unit: FluidUnit.oz,
            note: 'Lite',
          },
          {
            value: 100,
            unit: FluidUnit.ml,
            note: 'Basil Seeds',
          },
        ],
        tea: [
          {
            value: 140,
            unit: FluidUnit.ml,
            note: 'Olong Tea',
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
            value: 0.5,
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
            note: 'Lite',
          },
          {
            value: 80,
            unit: FluidUnit.ml,
            note: 'Basil Seeds',
          },
        ],
        tea: [
          {
            value: 100,
            unit: FluidUnit.ml,
            note: 'Olong Tea',
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
            value: 0.4,
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
            note: 'Lite',
          },
          {
            value: 60,
            unit: FluidUnit.ml,
            note: 'Basil Seeds',
          },
        ],
        tea: [
          {
            value: 80,
            unit: FluidUnit.ml,
            note: 'Olong Tea',
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
            value: 0.3,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
    ],
  },
  {
    name: 'Mango Fruit Tea',
    availability: true,
    note: null,
    recipes: [
      {
        syrup: [
          {
            value: 86,
            unit: WeightUnit.g,
          },
        ],
        tea: [
          {
            value: 240,
            unit: FluidUnit.ml,
            note: 'Green Tea',
          },
        ],
        water: null,
        milk: null,
        honey: [
          {
            value: 0.5,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
      },
      {
        syrup: [
          {
            value: 64,
            unit: WeightUnit.g,
          },
        ],
        tea: [
          {
            value: 180,
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
            value: 54,
            unit: WeightUnit.g,
          },
        ],
        tea: [
          {
            value: 140,
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
    ],
  },
  {
    name: 'Passion Fruit Green Tea',
    availability: true,
    note: null,
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
            value: 240,
            unit: FluidUnit.ml,
            note: 'Green Tea',
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
            value: 180,
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
      {
        syrup: [
          {
            value: 1,
            unit: FluidUnit.oz,
          },
        ],
        tea: [
          {
            value: 140,
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
        powder: null,
      },
    ],
  },
];