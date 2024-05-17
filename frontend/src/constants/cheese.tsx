import {
  FluidUnit,
  KFTeaDrink,
  Label,
  PowderUnit,
  Recipe,
  WeightUnit,
} from '../types/kf';

export const CMF_NEW: KFTeaDrink[] = [
  {
    name: 'CMF Green Tea',
    availability: true,
    note: null,
    recipes: [
      {
        syrup: null,
        tea: [
          {
            value: 240,
            unit: FluidUnit.ml,
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
        type: Recipe.Standard,
      },
      {
        syrup: null,
        tea: [
          {
            value: 180,
            unit: FluidUnit.ml,
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
        type: Recipe.Medium,
      },
      {
        syrup: null,
        tea: [
          {
            value: 140,
            unit: FluidUnit.ml,
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
        type: Recipe.Small,
      },
    ],
    label: new Set([Label.COLD]),
  },
  {
    name: 'CMF Black Tea',
    availability: true,
    note: null,
    recipes: [
      {
        syrup: null,
        tea: [
          {
            value: 180,
            unit: FluidUnit.ml,
            note: 'Black Tea',
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
            value: 1.2,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Standard,
      },
      {
        syrup: null,
        tea: [
          {
            value: 140,
            unit: FluidUnit.ml,
            note: 'Black Tea',
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
            value: 0.9,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Medium,
      },
      {
        syrup: null,
        tea: [
          {
            value: 100,
            unit: FluidUnit.ml,
            note: 'Black Tea',
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
            value: 0.7,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Small,
      },
    ],
    label: new Set([Label.COLD]),
  },
  {
    name: 'CMF Oolong Tea',
    availability: true,
    note: null,
    recipes: [
      {
        syrup: null,
        tea: [
          {
            value: 300,
            unit: FluidUnit.ml,
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
        powder: null,
        type: Recipe.Standard,
      },
      {
        syrup: null,
        tea: [
          {
            value: 220,
            unit: FluidUnit.ml,
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
        type: Recipe.Medium,
      },
      {
        syrup: null,
        tea: [
          {
            value: 180,
            unit: FluidUnit.ml,
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
        type: Recipe.Small,
      },
    ],
    label: new Set([Label.COLD]),
  },
  {
    name: 'CMF Rose',
    availability: true,
    note: null,
    recipes: [
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
          },
        ],
        water: null,
        milk: null,
        honey: null,
        powder: null,
        type: Recipe.Standard,
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
          },
        ],
        water: null,
        milk: null,
        honey: null,
        powder: null,
        type: Recipe.Medium,
      },
      {
        syrup: [
          {
            value: 34,
            unit: WeightUnit.g,
          },
        ],
        tea: [
          {
            value: 120,
            unit: FluidUnit.ml,
          },
        ],
        water: null,
        milk: null,
        honey: null,
        powder: null,
        type: Recipe.Small,
      },
    ],
    label: new Set([Label.COLD]),
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
            unit: WeightUnit.g,
          },
        ],
        tea: [
          {
            value: 180,
            unit: FluidUnit.ml,
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
        type: Recipe.Standard,
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
        type: Recipe.Medium,
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
            value: 100,
            unit: FluidUnit.ml,
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
        type: Recipe.Small,
      },
    ],
    label: new Set([Label.COLD]),
  },
  {
    name: 'CMF Chocolate',
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
            value: 140,
            unit: FluidUnit.ml,
            note: 'steam',
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.6,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Standard,
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
            value: 100,
            unit: FluidUnit.ml,
            note: 'steam',
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
        type: Recipe.Medium,
      },
      {
        syrup: [
          {
            value: 1.5,
            unit: PowderUnit.ts,
          },
        ],
        tea: null,
        water: [
          {
            value: 80,
            unit: FluidUnit.ml,
            note: 'steam',
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
        type: Recipe.Small,
      },
    ],
    label: new Set([Label.COLD]),
  },
  {
    name: 'CMF Matcha',
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
            value: 140,
            unit: FluidUnit.ml,
            note: 'cold then steam',
          },
        ],
        milk: null,
        honey: [
          {
            value: 0.6,
            unit: FluidUnit.honey,
          },
        ],
        powder: null,
        type: Recipe.Standard,
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
            value: 100,
            unit: FluidUnit.ml,
            note: 'cold then steam',
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
        type: Recipe.Medium,
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
            value: 80,
            unit: FluidUnit.ml,
            note: 'cold then steam',
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
        type: Recipe.Small,
      },
    ],
    label: new Set([Label.COLD]),
  },
];

const a = CMF_NEW.map((CMF) => {
  CMF.label = new Set([Label.COLD]);
  CMF.recipes.forEach((r, i) => {
    if (i == 0) {
      r.type = Recipe.Standard;
    } else if (i == 1) {
      r.type = Recipe.Medium;
    } else if (i == 2) {
      r.type = Recipe.Small;
    }
  });
  return CMF;
});
console.log(a);
