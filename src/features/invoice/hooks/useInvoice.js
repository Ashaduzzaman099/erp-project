import { useState } from "react";

import customerService from "../services/customerService";
import officerService from "../services/officerService";
import productService from "../../product/services/productService";

import { DEFAULT_INVOICE } from "../constants/invoiceConstants";
import createInvoiceItem from "../utils/createInvoiceItem";
import updateInvoiceItem from "../utils/updateInvoiceItem";

const useInvoice = () => {
  /* ================= DATA ================= */

  const [officers] = useState(officerService.getAll());
  const [customers] = useState(customerService.getAll());
  const [products] = useState(productService.getAll());

  /* ================= STATE ================= */

  const [selectedOfficerId, setSelectedOfficerId] = useState(null);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const [invoiceData, setInvoiceData] = useState({
    ...DEFAULT_INVOICE,
    items: [createInvoiceItem()],
  });

  /* ================= OFFICER ================= */

  const handleOfficerSelect = (id) => {
    setSelectedOfficerId(id);

    if (!id) {
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
      return;
    }

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
  };

  /* ================= CUSTOMER ================= */

  const handleCustomerSelect = (id) => {
    setSelectedCustomerId(id);

    const customer = customerService.getById(id);

    if (!customer) return;

    setInvoiceData((prev) => ({
      ...prev,
      customer: {
        name: customer.name,
        business: customer.business,
        address: customer.address,
        mobile: customer.mobile,
      },
    }));
  };

  /* ================= PRODUCT ================= */

  const handleProductSelect = (index, productId) => {
    const product = productService.getById(productId);

    if (!product) return;

    const updatedItems = updateInvoiceItem(
        invoiceData.items,
        index,
        {
          productId,
          productName: product.name,
          packSizeId: "",
          packSizeLabel: "",
          price: 0,
        }
      );

      setInvoiceData((prev) => ({
        ...prev,
        items: updatedItems,
      }));
        };

  const handlePackSizeSelect = (index, packSizeId) => {
    const item = invoiceData.items[index];

    const product = productService.getById(item.productId);

    if (!product) return;

    const pack = product.packSizes.find((pack) => pack.optionId === packSizeId);

    if (!pack) return;

    const updatedItems = updateInvoiceItem(
      invoiceData.items,
      index,
      {
        packSizeId,
        packSizeLabel: pack.label,
        price: pack.unitPrice,
      }
    );

    setInvoiceData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  /* ================= ITEM ================= */

  const handleItemChange = (index, field, value) => {
    const updatedItems = updateInvoiceItem(
      invoiceData.items,
      index,
      {
        [field]:
          field === "quantity"
            ? Number(value)
            : value,
      }
    );

    setInvoiceData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const addItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [...prev.items, createInvoiceItem()],
    }));
  };

  const removeItem = (index) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  return {
    officers,
    customers,
    products,

    selectedOfficerId,
    filteredCustomers,
    selectedCustomerId,

    invoiceData,

    handleOfficerSelect,
    handleCustomerSelect,
    handleProductSelect,
    handlePackSizeSelect,
    handleItemChange,
    addItem,
    removeItem,
  };
};

export default useInvoice;
