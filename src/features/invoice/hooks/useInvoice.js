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

  /* ================= CUSTOMER ================= */
  const handleCustomerSelect = (id) => {
    setSelectedCustomerId(id);

    const customer = customers.find((c) => c.id === id);

    if (customer) {
      setInvoiceData((prev) => ({
        ...prev,
        customer: {
          name: customer.name,
          business: customer.business,
          address: customer.address,
          mobile: customer.mobile,
        },
      }));
    }
  };

  /* ================= PRODUCT ================= */

  const handleProductSelect = (index, productId) => {
    const product = products.find((p) => p.id === productId);

    if (!product) return;

    const updatedItems = [...invoiceData.items];

    updatedItems[index] = {
      ...updatedItems[index],
      productId,
      productName: product.name,
      packSizeId: "",
      packSizeLabel: "",
      price: 0,
    };

    setInvoiceData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const handlePackSizeSelect = (index, packSizeId) => {
    const item = invoiceData.items[index];
    const product = products.find((p) => p.id === item.productId);
    const pack = product.packSizes.find((p) => p.optionId === packSizeId);

    const updatedItems = [...invoiceData.items];
    updatedItems[index] = {
      ...updatedItems[index],
      packSizeId,
      packSizeLabel: pack.label,
      price: pack.unitPrice,
    };

    setInvoiceData((prev) => ({ ...prev, items: updatedItems }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = field === "quantity" ? Number(value) : value;

    setInvoiceData((prev) => ({ ...prev, items: updatedItems }));
  };

  const addItem = () =>
    setInvoiceData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          productId: "",
          productName: "",
          packSizeId: "",
          packSizeLabel: "",
          quantity: 1,
          price: 0,
        },
      ],
    }));

  const removeItem = (index) =>
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));

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
    products,
    addItem,
    removeItem,

    selectedOfficerId,
    setSelectedOfficerId,

    filteredCustomers,
    setFilteredCustomers,

    selectedCustomerId,
    setSelectedCustomerId,

    invoiceData,
    setInvoiceData,
    handleOfficerSelect,
    handleCustomerSelect,
    handleProductSelect,
    handlePackSizeSelect,
    handleItemChange,
  };
};

export default useInvoice;
