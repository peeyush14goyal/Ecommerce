const d = new Date().toString().substr(0, 25);
export const order = {
  info: {
    order: 4,
    created_on: d,
    customer: "Name, Mobile",
    order_status: "Processing",
    order_total: 102.0,
    profit: 102.0,
    payment_status: "Paid",
    payment_mode: "Online",
    expected_delivery_date: d,
  },

  billing: {
    billing_address: {
      full_name: "Amit Agnihotri",
      email: "gref@suriconsumer.com",
      phone: 14785236,
      company: "Brenda Company",
      address_1: "Exotica Greater Noida West",
      address_2: "T-34 1654",
      city: "Noida",
      state: "Uttar Pradesh",
      pincode: 99901,
    },
    pickup_point_address: {
      address_1: "Gair City",
      city: "Noida",
      pincode: 201301,
    },
    seller: {
      full_name: "Fresh Foods Pvt Limited",
      contact: 12548512,
      address: "F-125, 5th floor, Deluxe Mall, Raj Marg, New delhi",
    },
  },

  products: [
    /**
     * Status in each product
     * 1 is for available
     * 0 Out of Stock
     */
    {
      picture:
        "data:image/jpeg;base64,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",
      product_name: "Headphones",
      sku: "HEAD_PH",
      price: 100,
      quantity: 2,
      discount: 0,
      status: 1,
    },
    {
      picture:
        "data:image/jpeg;base64,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",
      product_name: "Camera",
      sku: "CAM",
      price: 100,
      quantity: 2,
      discount: 0,
      status: 0,
    },
    {
      picture:
        "data:image/jpeg;base64,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",
      product_name: "Product",
      sku: "PR_DT",
      price: 100,
      quantity: 2,
      discount: 0,
      status: 1,
    },
  ],
  order_notes: [
    {
      created_on: d,
      note: "Order Shipped",
    },
    {
      created_on: d,
      note: "Order Paid",
    },
    {
      created_on: d,
      note: "Order Placed",
    },
  ],
};
