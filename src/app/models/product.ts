export interface IProductSearch {
  name: string;
  sortBy: string;
  sortDirection: string;
}

export interface IPagedProduct {
  currentPage: number;
  rowCount: number;
  pageSize: number;
  products: Array<IProduct>;
}

// export interface IProduct {
//   id: string;
//   name: string;
//   shortDescription: string;
//   fullDescription: string;
//   defaultPicture: string;
//   priceRange: string;
//   isPublished: boolean;
//   oldPrice: string;
//   Unit: string;
//   categoryId: string;
//   displayAvailablity: boolean;
//   maximumCartQuantity: string;
//   minimumCartQuantity: string;
//   pictures: any[];
// }

export interface IProduct {
  Id: string;
  Name: string;
  ShortDescription: string;
  FullDescription: string;
  SKU: string;
  CategoryId: string;
  IsPublished: boolean;
  ShowOnHomeScreen: boolean;
  AllowCustomerReview: boolean;
  AvailableStartDate: Date;
  AvailableEndDate: Date;
  MarkAsNew: boolean;
  DisableBuyButton: boolean;
  Picture: string;
  Price: number;
  OldPrice: number;
  ProductCost: number;
  DisableWishList: boolean;
  Discount: number;
  Unit: string;
  TaxExempt: boolean;
  MinimumCartQty: number;
  MaximumcartQty: number;
  NotReturnable: boolean;
  StockQuantity: number;
  DisplayAvailability: boolean;
  MinimumStockQuantity: number;
  NotifyForQuantityBelow: number;
}
