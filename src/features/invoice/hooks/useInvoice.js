import { useState } from "react";
import customerService from "../../../services/customerService";
import officerService from "../../../services/officerService";
import productService from "../../../services/productService";

const useInvoice = () => {
  /* ================= OFFICER ================= */

  const handleOfficerSelect = (id) => {
    setSelectedOfficerId(id);

    if (id) {
      const officer = officerService.getById(id);

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

      setFilteredCustomers(customerService.getByOfficerId(id));

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

    const customer = customerService.getById(id);

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
    const product = productService.getById(productId);

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
  const [officers] = useState(officerService.getAll());
  const [customers] = useState(customerService.getAll());
  const [products] = useState(productService.getAll());

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
