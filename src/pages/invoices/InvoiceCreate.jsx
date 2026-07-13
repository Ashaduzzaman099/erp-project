import Invoice from "../../components/Invoice";
import CustomerSection from "../../features/invoice/components/CustomerSection";
import InvoiceInfoSection from "../../features/invoice/components/InvoiceInfoSection";
import InvoiceItemsSection from "../../features/invoice/components/InvoiceItemsSection";
import OfficerSection from "../../features/invoice/components/OfficerSection";
import useInvoice from "../../features/invoice/hooks/useInvoice";

const InvoiceCreate = () => {
  const {
    officers,
    customers,
    products,

    selectedOfficerId,

    filteredCustomers,

    selectedCustomerId,

    invoiceData,
    setInvoiceData,

    handleOfficerSelect,
    handleCustomerSelect,
  } = useInvoice();

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

        <OfficerSection
          officers={officers}
          selectedOfficerId={selectedOfficerId}
          invoiceData={invoiceData}
          handleOfficerSelect={handleOfficerSelect}
        />

        <CustomerSection
          selectedOfficerId={selectedOfficerId}
          selectedCustomerId={selectedCustomerId}
          filteredCustomers={filteredCustomers}
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
          handleCustomerSelect={handleCustomerSelect}
        />

        <InvoiceItemsSection
          invoiceData={invoiceData}
          products={products}
          handleProductSelect={handleProductSelect}
          handlePackSizeSelect={handlePackSizeSelect}
          handleItemChange={handleItemChange}
          addItem={addItem}
          removeItem={removeItem}
        />
      </div>

      {/* ================= RIGHT ================= */}
      <div className="bg-gray-50 p-4 rounded-2xl shadow-lg overflow-auto max-h-[85vh]">
        <Invoice invoice={invoiceData} />
      </div>
    </div>
  );
};

/* ================= REUSABLE ================= */

export default InvoiceCreate;
