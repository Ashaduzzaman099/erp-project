import Invoice from "../../components/Invoice";
import CustomerSection from "../../features/invoice/components/CustomerSection";
import InvoiceInfoSection from "../../features/invoice/components/InvoiceInfoSection";
import InvoiceItemsSection from "../../features/invoice/components/InvoiceItemsSection";
import OfficerSection from "../../features/invoice/components/OfficerSection";
import useInvoice from "../../features/invoice/hooks/useInvoice";

const InvoiceCreate = () => {
  const {
    officers,
    products,
    addItem,
    removeItem,

    selectedOfficerId,

    filteredCustomers,

    selectedCustomerId,

    invoiceData,
    setInvoiceData,

    handleOfficerSelect,
    handleCustomerSelect,
    handleProductSelect,
    handlePackSizeSelect,
    handleItemChange,
  } = useInvoice();

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
