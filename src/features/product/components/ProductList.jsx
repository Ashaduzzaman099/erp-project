import DataTable from "../../../components/common/DataTable";
import productService from "../services/productService";

function ProductList() {
  const products = productService.getAll();

  const data = products.flatMap((product) =>
    product.packSizes.map((variant) => ({
      id: variant.optionId,
      productId: product.id,
      productName: product.name,
      packSize: variant.label,
      unitPrice: variant.unitPrice,
      sku: "-",
      status: "Active",
    }))
  );

  const columns = [
    {
      accessorKey: "sl",
      header: "SL",
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: "productName",
      header: "Product",
    },
    {
      accessorKey: "packSize",
      header: "Pack Size",
    },
    {
      accessorKey: "unitPrice",
      header: "Unit Price",
      cell: ({ row }) =>
        `৳ ${row.original.unitPrice.toLocaleString()}`,
    },
    {
      accessorKey: "sku",
      header: "SKU",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: () => (
        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
          Active
        </span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: () => (
        <div className="flex gap-2">
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
      data={data}
      emptyMessage="No products found."
    />
  );
}

export default ProductList;