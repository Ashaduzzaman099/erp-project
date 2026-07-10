import { useState } from "react";

import customersData from "../../../data/customers";
import officersData from "../../../data/officers";
import productsData from "../../../data/products";

const useInvoice = () => {
  /* ================= DATA ================= */
  const [officers] = useState(officersData);
  const [customers] = useState(customersData);
  const [products] = useState(productsData);

  /* ================= STATE ================= */
  const [selectedOfficerId, setSelectedOfficerId] = useState(null);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const [invoiceData, setInvoiceData] = useState({
    id: "13",
    date: new Date().toISOString().split("T")[0],
    officer: { name: "", phone: "" },
    customer: { name: "", business: "", address: "", mobile: "" },
    items: [
      {
        productId: "",
        productName: "",
        packSizeId: "",
        packSizeLabel: "",
        quantity: 1,
        price: 0,
      },
    ],
  });

  return {
    officers,
    customers,
    products,

    selectedOfficerId,
    setSelectedOfficerId,

    filteredCustomers,
    setFilteredCustomers,

    selectedCustomerId,
    setSelectedCustomerId,

    invoiceData,
    setInvoiceData,
  };
};

export default useInvoice;