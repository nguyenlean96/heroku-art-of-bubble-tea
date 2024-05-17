import { FluidUnit, KFTeaDrink, Label, WeightUnit, PowderUnit, Recipe } from '../types/kf';

export const LATTE_NEW: KFTeaDrink[] = [
  {
    name: 'Earl Grey Latte',
    label: new Set([Label.NEW, Label.COLD, Label.HOT, Label.MILK]),
    availability: true,
    recipes: [],
    note: null,
  },
  {
    name: 'Earl Grey Latte with pearl',
    label: new Set([Label.NEW, Label.COLD, Label.HOT, Label.MILK]),
    availability: true,
    recipes: [],
    note: null,
  },
  {
    name: 'Pearl Latte with Brown Sugar',
    label: new Set([Label.RECOMMEND, Label.COLD, Label.HOT, Label.MILK]),
    availability: true,
    note: 'null',
    recipes: [
      {
        syrup: null,
        tea: null,
        water: null,
        milk: [
          {
            value: 300,
            unit: FluidUnit.ml,
          },
        ],
        honey: null,
        powder: null,
        toppings: [{
          value: 180,
          unit: WeightUnit.g,
          note: 'Pearl'
        }],
        type: Recipe.Standard,
      },
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
        toppings: [{
          value: 120,
          unit: WeightUnit.g,
          note: 'Pearl'
        }],
        type: Recipe.Medium,
      },
    ],
  },
  {
    name: 'Pearl Black Tea Latte',
    label: new Set([Label.COLD, Label.HOT, Label.MILK]),
    availability: true,
    note: 'Can change to green tea or Oolong',
    recipes: [
      {
        syrup: null,
        tea: [
          {
            value: 160,
            unit: FluidUnit.ml,
          },
        ],
        water: null,
        milk: [
          {
            value: 180,
            unit: FluidUnit.ml,
          },
        ],
        honey: [
          {
            value: 1.4,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Standard
      },
      {
        syrup: null,
        tea: [
          {
            value: 120,
            unit: FluidUnit.ml,
          },
        ],
        water: null,
        milk: [
          {
            value: 140,
            unit: FluidUnit.ml,
          },
        ],
        honey: [
          {
            value: 1,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Medium
      },
      {
        syrup: null,
        tea: [
          {
            value: 100,
            unit: FluidUnit.ml,
          },
        ],
        water: null,
        milk: [
          {
            value: 120,
            unit: FluidUnit.ml,
          },
        ],
        honey: [
          {
            value: 0.8,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Small
      },
    ],
  },
  {
    name: 'Pearl Chocolate Latte',
    label: new Set([Label.COLD, Label.HOT, Label.MILK]),
    availability: true,
    note: null,
    recipes: [
      {
        syrup: [
          {
            value: 3,
            unit: PowderUnit.ts,
          },
        ],
        tea: null,
        water: [
          {
            value: 100,
            unit: FluidUnit.ml,
          },
        ],
        milk: [
          {
            value: 180,
            unit: FluidUnit.ml,
          },
        ],
        honey: [
          {
            value: 0.6,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Standard
      },
      {
        syrup: [
          {
            value: 2,
            unit: PowderUnit.ts,
          },
        ],
        tea: null,
        water: [
          {
            value: 80,
            unit: FluidUnit.ml,
          },
        ],
        milk: [
          {
            value: 140,
            unit: FluidUnit.ml,
          },
        ],
        honey: [
          {
            value: 0.4,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Medium
      },
      {
        syrup: [
          {
            value: 1,
            unit: PowderUnit.ts,
          },
        ],
        tea: null,
        water: [
          {
            value: 60,
            unit: FluidUnit.ml,
          },
        ],
        milk: [
          {
            value: 120,
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
        type: Recipe.Small
      },
    ],
  },
  {
    name: 'Pearl Matcha Latte',
    availability: true,
    note: null,
    recipes: [
      {
        syrup: [
          {
            value: 34,
            unit: WeightUnit.g,
          },
        ],
        tea: null,
        water: [
          {
            value: 100,
            unit: FluidUnit.ml,
          },
        ],
        milk: [
          {
            value: 180,
            unit: FluidUnit.ml,
          },
        ],
        honey: [
          {
            value: 0.6,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Standard
      },
      {
        syrup: [
          {
            value: 26,
            unit: WeightUnit.g,
          },
        ],
        tea: null,
        water: [
          {
            value: 80,
            unit: FluidUnit.ml,
          },
        ],
        milk: [
          {
            value: 140,
            unit: FluidUnit.ml,
          },
        ],
        honey: [
          {
            value: 0.4,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Medium
      },
      {
        syrup: [
          {
            value: 22,
            unit: WeightUnit.g,
          },
        ],
        tea: null,
        water: [
          {
            value: 60,
            unit: FluidUnit.ml,
          },
        ],
        milk: [
          {
            value: 120,
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
        type: Recipe.Small
      },
    ],
  },
  {
    name: 'Pearl Taro Latte',
    label: new Set([Label.COLD, Label.HOT, Label.MILK]),
    availability: true,
    note: 'Pearl + Taro: 100 + 120g 80 _ 90g (if no pearls, Taro: 160-120g)',
    recipes: [
      {
        syrup: null,
        tea: null,
        water: [
          {
            value: 60,
            unit: FluidUnit.ml,
            note: 'if no pearls, add extra 40ml milk',
          },
        ],
        milk: [
          {
            value: 140,
            unit: FluidUnit.ml,
          },
        ],
        honey: [
          {
            value: 0.3,
            unit: FluidUnit.honey,
          },
        ],
        toppings: [{
          value: 120,
          unit: WeightUnit.g,
          note: 'Pearl'
        }],
        powder: null,
      },
      {
        syrup: null,
        tea: null,
        water: [
          {
            value: 40,
            unit: FluidUnit.ml,
            note: 'if no pearls, add extra 40ml milk',
          },
        ],
        milk: [
          {
            value: 120,
            unit: FluidUnit.ml,
          },
        ],
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
];