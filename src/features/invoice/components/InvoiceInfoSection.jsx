import Input from "../../../components/ui/Input";
import Section from "../../../components/ui/Section";

const InvoiceInfoSection = ({ invoiceData, setInvoiceData }) => {
  return (
    <Section title="Invoice Info">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Invoice Number"
          type="number"
          value={invoiceData.id}
          onChange={(e) =>
            setInvoiceData((prev) => ({
              ...prev,
              id: e.target.value,
            }))
          }
        />

        <Input
          type="date"
          label="Date"
          value={invoiceData.date}
          onChange={(e) =>
            setInvoiceData((prev) => ({
              ...prev,
              date: e.target.value,
            }))
          }
        />
      </div>
    </Section>
  );
};

export default InvoiceInfoSection;
