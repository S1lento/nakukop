export interface State {
  products: Instance[];
  data: {id: number, name: string, products}[];
  cart: [];
}
export interface Events {
  add: (state, product) => void;
  delete: (state, value) => void;
}

export interface MappingData {
    [key: string]: any;
}

export interface Category {
  id: number;
  name: string;
  products?: any;
  isDisabled?: boolean;
}

export interface Instance {
  id: Category['id'];
  name?: Category['name'];
  price: number;
  groupId: number;
  amount: number;
  isDisabled: boolean;
}