import Input from "../../../components/ui/Input";
import Section from "../../../components/ui/Section";
import Select from "../../../components/ui/Select";

const InvoiceItemsSection = ({
  invoiceData,
  products,
  handleProductSelect,
  handlePackSizeSelect,
  handleItemChange,
  addItem,
  removeItem,
}) => {
  return (
    <Section title="Invoice Items">
      {invoiceData.items.map((item, index) => {
        const product = products.find((p) => p.id === item.productId);

        return (
          <div
            key={index}
            className="grid grid-cols-1 gap-2 mb-3 items-end md:grid-cols-6"
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
              className="text-xs text-red-600 md:col-span-6"
            >
              ❌ Remove Item
            </button>
          </div>
        );
      })}

      <button
        onClick={addItem}
        className="rounded bg-green-600 px-4 py-2 text-white"
      >
        + Add Item
      </button>
    </Section>
  );
};

export default InvoiceItemsSection;
