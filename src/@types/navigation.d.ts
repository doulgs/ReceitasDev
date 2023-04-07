import { FoodsProps } from "../interfaces/IntFoods";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Detail: {
        data: FoodsProps;
      };
      Search: {
        name: string;
      };
    }
  }
}
