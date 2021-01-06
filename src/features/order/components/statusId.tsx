const status: any = {
  orderStatus: {
    0: "Pending",
    1: "Processing",
    2: "Complete",
    3: "Cancelled",
  },
  shippingStatus: {
    0: "Not yet shipped",
    1: "Shipping Not Required",
    2: "Shipped",
    3: "Delivered",
  },
  paymentStatus: {
    0: "Paid",
    1: "Pending",
    2: "Refund",
  },
};

// const status = {
//   orderStatus: ["Pending", "Processing", "Complete", "Cancelled"],
//   shippingStatus: [
//     "Not yet shipped",
//     "Shipping Not Required",
//     "Shipped",
//     "Delivered",
//   ],
//   paymentStatus: ["Paid", "Pending", "Refund"],
// };
export default status;
