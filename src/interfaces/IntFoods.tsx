export interface RouteFoods {
  data: FoodsProps;
}

export interface FoodsProps {
  id: string;
  name: string;
  total_ingredients: string;
  time: number;
  cover: string;
  video: string;
  ingredients: IngredientsProps[];
  instructions: InstructionsProps[];
}

export interface IngredientsProps {
  id: string;
  name: string;
  amount: string;
}

export interface InstructionsProps {
  id: string;
  text: string;
}
