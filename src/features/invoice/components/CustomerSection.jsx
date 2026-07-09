import Input from "../../../components/ui/Input";
import Section from "../../../components/ui/Section";
import Select from "../../../components/ui/Select";

const CustomerSection = ({
  selectedOfficerId,
  selectedCustomerId,
  filteredCustomers,
  invoiceData,
  setInvoiceData,
  handleCustomerSelect,
}) => {
  return (
    <Section title="Customer Info">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
  );
};

export default CustomerSection;
