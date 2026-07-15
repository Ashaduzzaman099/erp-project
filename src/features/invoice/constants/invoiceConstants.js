export const DEFAULT_INVOICE = {
  id: "13",
  date: new Date().toISOString().split("T")[0],

  officer: {
    name: "",
    phone: "",
  },

  customer: {
    name: "",
    business: "",
    address: "",
    mobile: "",
  },
};
