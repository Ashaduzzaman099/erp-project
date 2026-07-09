import Input from "../../../components/ui/Input";
import Section from "../../../components/ui/Section";
import Select from "../../../components/ui/Select";

const OfficerSection = ({
  officers,
  selectedOfficerId,
  invoiceData,
  handleOfficerSelect,
}) => {
  return (
    <Section title="Officer Info">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Select
          label="Select Officer"
          value={selectedOfficerId || ""}
          options={[{ id: null }, ...officers]}
          onChange={(e) => handleOfficerSelect(Number(e.target.value) || null)}
        />

        <Input
          label="Officer Phone"
          value={invoiceData.officer.phone}
          disabled
        />
      </div>
    </Section>
  );
};

export default OfficerSection;
