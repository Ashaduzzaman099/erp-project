import { useState } from "react";

import customersData from "../../../data/customers";
import officersData from "../../../data/officers";
import productsData from "../../../data/products";

const useInvoice = () => {
  /* ================= OFFICER ================= */

  const handleOfficerSelect = (id) => {
    setSelectedOfficerId(id);

    if (id) {
      const officer = officers.find((o) => o.id === id);

      setInvoiceData((prev) => ({
        ...prev,
        officer: {
          name: officer.name,
          phone: officer.phone,
        },
        customer: {
          name: "",
          business: "",
          address: "",
          mobile: "",
        },
      }));

      setFilteredCustomers(customers.filter((c) => c.officerId === id));

      setSelectedCustomerId(null);
    } else {
      setInvoiceData((prev) => ({
        ...prev,
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
      }));

      setFilteredCustomers([]);
      setSelectedCustomerId(null);
    }
  };
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
    handleOfficerSelect,
  };
};

export default useInvoice;
