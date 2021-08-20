interface ISale {
  rowId: number;
  orderId: string;
  orderDate: string;
  shipDate: string;
  shipMode: string;
  customerId: string;
  customerName: string;
  segment: string;
  country: string;
  city: string;
  state: string;
  postalCode: number;
  region: string;
  productId: string;
  category: string;
  subCategory: string;
  productName: string;
  sales: number;
  quantity: number;
  discount: number;
  profit: number;
}

type SaleState = {
  sales: ISale[];
};

type SetAction = {
  type: string;
  payload: ISale[];
};

type GetAction = {
  type: string;
  payload: any;
};

// dispatch types
type DispatchType = (args: GetAction) => GetAction;

type SaleActionTypes = SetAction | GetAction;

// city state types
interface IState {
  city: string;
  state: string;
}

interface Category {
  name: string;
}

interface SubCategory {
  category: string;
  subCategory: string;
}
