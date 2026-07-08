export const sidebarMenu = [
  {
    title: "Dashboard",
    path: "/",
    children: [],
  },

  {
    title: "Officers",
    key: "officers",
    children: [
      {
        title: "Add Officer",
        path: "/officers/create",
      },
      {
        title: "View Officers",
        path: "/officers",
      },
    ],
  },

  {
    title: "Customers",
    key: "customers",
    children: [
      {
        title: "Add Customer",
        path: "/customers/create",
      },
      {
        title: "View Customers",
        path: "/customers",
      },
    ],
  },

  {
    title: "Products",
    key: "products",
    children: [
      {
        title: "Add Product",
        path: "/products/create",
      },
      {
        title: "View Products",
        path: "/products",
      },
    ],
  },

  {
    title: "Invoices",
    key: "invoice",
    children: [
      {
        title: "Create Invoice",
        path: "/invoices/create",
      },
      {
        title: "Invoice List",
        path: "/invoices",
      },
    ],
  },
];