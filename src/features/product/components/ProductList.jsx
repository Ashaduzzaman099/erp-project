import DataTable from "../../../components/common/DataTable/DataTable";
import productService from "../services/productService";

function ProductList() {
  const products = productService.getAll();

  const rows = products.flatMap((product) =>
    product.packSizes.map((variant) => ({
      id: variant.optionId,
      productName: product.name,
      packSize: variant.label,
      unitPrice: variant.unitPrice,
      sku: "-",
      status: "Active",
    }))
  );

  const columns = [
    {
      key: "sl",
      title: "SL",
      render: (_, index) => index + 1,
      align: "center",
    },
    {
      key: "productName",
      title: "Product",
    },
    {
      key: "packSize",
      title: "Pack Size",
    },
    {
      key: "unitPrice",
      title: "Unit Price",
      align: "right",
      render: (row) => row.unitPrice.toLocaleString(),
    },
    {
      key: "sku",
      title: "SKU",
      align: "center",
    },
    {
      key: "status",
      title: "Status",
      align: "center",
      render: () => (
        <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
          Active
        </span>
      ),
    },
    {
      key: "actions",
      title: "Actions",
      align: "center",
      render: () => (
        <div className="flex justify-center gap-2">
          <button className="rounded border px-2 py-1 text-xs hover:bg-gray-100">
            View
          </button>

          <button className="rounded border border-blue-500 px-2 py-1 text-xs text-blue-600 hover:bg-blue-50">
            Edit
          </button>

          <button className="rounded border border-red-500 px-2 py-1 text-xs text-red-600 hover:bg-red-50">
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={rows}
      emptyMessage="No products available."
    />
  );
}

export default ProductList;