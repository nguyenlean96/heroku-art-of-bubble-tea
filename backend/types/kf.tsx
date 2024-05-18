export type KFTeaDrink = {
  name: string;
  availability: boolean | string;
  label: (keyof typeof Label)[];
  note?: string;
  recipes: Partial<RecipeDrink>[];
};

export type RecipeDrink = {
  syrup: Data[];
  tea: Data[];
  water: Data[];
  milk: Data[];
  honey: Data[];
  powder: Data[];
  toppings: Data[];
  type: keyof typeof Recipe;
};
export enum Label {
  NEW = 'New product',
  COLD = 'Offered Cold',
  HOT = 'Offered Hot',
  RECOMMEND = 'Recommend',
  MILK = 'MILK',
}
export type Data = {
  value: string | number;
  unit: Unit;
  note?: string | null;
};
type Unit =
  | keyof typeof FluidUnit
  | keyof typeof WeightUnit
  | keyof typeof PowderUnit;

export enum WeightUnit {
  g,
  kg,
}
export enum FluidUnit {
  ml,
  oz,
  honey,
}
export enum PowderUnit {
  lg,
  med,
  sm,
  ts,
}

export enum Recipe {
  Standard,
  Medium,
  Small,
  ExtraSmall,
}
