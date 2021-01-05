export interface IOrder {
  Id: string;
  OrderNumber: string;
  ProductId: string;
  CategoryId: string;
  ShippingAddressId: string;
  ResellerId: string;
  PickupInStore: boolean;
  OrderStatusId: number;
  ShippingStatusId: number;
  PaymentStatusId: number;
  PaymentMethodSystemName: string;
  OrderTotal: number;
  RefundedAmount: number;
  OrderDiscount: number;
  CustomerIp: string;
  CaptureTransactionId: string;
  CaptureTransactionResult: string;
  PaidDate: Date;
  ShippingMethod: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  CreatedBy: number;
  UpdatedBy: number;
  OrderItems: [];
  OrderNotes: [];
}
