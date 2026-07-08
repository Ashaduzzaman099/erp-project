import { useState } from "react";
import Invoice from "../../components/Invoice";
import customersData from "../../data/customers";
import officersData from "../../data/officers";
import products from "../../data/products";
import InvoiceInfoSection from "../../features/invoice/components/InvoiceInfoSection";
const InvoiceCreate = () => {
  /* ================= DATA ================= */
  const [officers] = useState(officersData);
  const [customers] = useState(customersData);

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

  /* ================= OFFICER ================= */
  const handleOfficerSelect = (id) => {
    setSelectedOfficerId(id);

    if (id) {
      const officer = officers.find((o) => o.id === id);
      setInvoiceData((prev) => ({
        ...prev,
        officer: { name: officer.name, phone: officer.phone },
        customer: { name: "", business: "", address: "", mobile: "" },
      }));

      setFilteredCustomers(customers.filter((c) => c.officerId === id));
      setSelectedCustomerId(null);
    } else {
      setInvoiceData((prev) => ({
        ...prev,
        officer: { name: "", phone: "" },
        customer: { name: "", business: "", address: "", mobile: "" },
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

  /* ================= ITEMS ================= */
  const handleProductSelect = (index, productId) => {
    const product = products.find((p) => p.id === productId);
    const updatedItems = [...invoiceData.items];

    updatedItems[index] = {
      ...updatedItems[index],
      productId,
      productName: product.name,
      packSizeId: "",
      packSizeLabel: "",
      price: 0,
    };

    setInvoiceData((prev) => ({ ...prev, items: updatedItems }));
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

  /* ================= UI ================= */
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {/* ================= LEFT ================= */}
      <div className="space-y-6">
        {/* Invoice Info */}
        <InvoiceInfoSection
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
        />

        {/* Officer */}
        <Section title="Officer Info">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Select Officer"
              value={selectedOfficerId || ""}
              options={[{ id: null }, ...officers]}
              onChange={(e) =>
                handleOfficerSelect(Number(e.target.value) || null)
              }
            />
            <Input
              label="Officer Phone"
              value={invoiceData.officer.phone}
              disabled
            />
          </div>
        </Section>

        {/* Customer */}
        <Section title="Customer Info">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedOfficerId ? (
              <Select
                label="Business Name (M/S)"
                value={selectedCustomerId || ""}
                options={filteredCustomers}
                onChange={(e) => handleCustomerSelect(Number(e.target.value))}
              />
            ) : (
              <Input
                label="Business Name (M/S)"
                value={invoiceData.customer.business}
                onChange={(e) =>
                  setInvoiceData((prev) => ({
                    ...prev,
                    customer: {
                      ...prev.customer,
                      business: e.target.value,
                    },
                  }))
                }
              />
            )}

            <Input
              label="Customer Name"
              value={invoiceData.customer.name}
              disabled={selectedOfficerId && selectedCustomerId}
            />

            <Input
              label="Address"
              value={invoiceData.customer.address}
              className="md:col-span-2"
              disabled={selectedOfficerId && selectedCustomerId}
            />

            <Input
              label="Mobile"
              value={invoiceData.customer.mobile}
              disabled={selectedOfficerId && selectedCustomerId}
            />
          </div>
        </Section>

        {/* Items */}
        <Section title="Invoice Items">
          {invoiceData.items.map((item, index) => {
            const product = products.find((p) => p.id === item.productId);

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-3 items-end"
              >
                <Select
                  placeholder="Product"
                  options={products}
                  value={item.productId}
                  onChange={(e) => handleProductSelect(index, e.target.value)}
                  className="md:col-span-2"
                />

                <Select
                  placeholder="Pack Size"
                  options={product ? product.packSizes : []}
                  value={item.packSizeId}
                  onChange={(e) => handlePackSizeSelect(index, e.target.value)}
                  disabled={!item.productId}
                />

                <Input
                  type="number"
                  placeholder="Qty"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", e.target.value)
                  }
                />

                <Input placeholder="Unit Price" value={item.price} disabled />

                <button
                  onClick={() => removeItem(index)}
                  className="text-red-600 text-xs md:col-span-6"
                >
                  ❌ Remove Item
                </button>
              </div>
            );
          })}

          <button
            onClick={addItem}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            + Add Item
          </button>
        </Section>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="bg-gray-50 p-4 rounded-2xl shadow-lg overflow-auto max-h-[85vh]">
        <Invoice invoice={invoiceData} />
      </div>
    </div>
  );
};

/* ================= REUSABLE ================= */
const Section = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow border">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    {label && <label className="text-sm font-medium">{label}</label>}
    <input {...props} className="w-full border rounded px-3 py-2" />
  </div>
);

const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  disabled,
  className,
}) => (
  <div className={className}>
    {label && <label className="text-sm font-medium">{label}</label>}
    <select
      value={value || ""}
      onChange={onChange}
      disabled={disabled}
      className="w-full border rounded px-3 py-2"
    >
      <option value="">{placeholder || "Select"}</option>
      {options.map((o) => (
        <option key={o.optionId || o.id} value={o.optionId || o.id}>
          {o.label || o.business || o.name}
        </option>
      ))}
    </select>
  </div>
);

export default InvoiceCreate;
