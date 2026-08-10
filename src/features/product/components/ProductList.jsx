import { useMemo, useState } from "react";

import DataTable from "../../../components/common/DataTable";
import DataTableToolbar from "../../../components/common/DataTable/DataTableToolbar";
import productService from "../services/productService";

function ProductList() {
  const [search, setSearch] = useState("");

  const products = productService.getAll();

  const data = useMemo(() => {
    const rows = products.flatMap((product) =>
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

    const searchText = search.trim().toLowerCase();

    if (!searchText) {
      return rows;
    }

    return rows.filter((row) =>
      [
        row.productName,
        row.packSize,
        row.sku,
        row.status,
      ].some((value) =>
        String(value).toLowerCase().includes(searchText)
      )
    );
  }, [products, search]);

  const columns = [
    {
      accessorKey: "sl",
      header: "SL",
      cell: ({ row }) => row.index + 1,
      meta: {
        width: "70px",
        align: "center",
      },
    },

    {
      accessorKey: "productName",
      header: "Product",
      meta: {
        width: "280px",
      },
    },

    {
      accessorKey: "packSize",
      header: "Pack Size",
      meta: {
        width: "180px",
      },
    },

    {
      accessorKey: "unitPrice",
      header: "Unit Price",
      cell: ({ row }) =>
        `৳ ${Number(row.original.unitPrice).toLocaleString()}`,
      meta: {
        width: "140px",
        align: "right",
      },
    },

    {
      accessorKey: "sku",
      header: "SKU",
      meta: {
        width: "150px",
        align: "center",
      },
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: () => (
        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
          Active
        </span>
      ),
      meta: {
        width: "120px",
        align: "center",
      },
    },

    {
      id: "actions",
      header: "Actions",
      cell: () => (
        <div className="flex justify-center gap-2">
          <button
            type="button"
            className="rounded border px-2 py-1 text-xs hover:bg-gray-100"
          >
            View
          </button>

          <button
            type="button"
            className="rounded border border-blue-500 px-2 py-1 text-xs text-blue-600 hover:bg-blue-50"
          >
            Edit
          </button>

          <button
            type="button"
            className="rounded border border-red-500 px-2 py-1 text-xs text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      ),
      meta: {
        width: "220px",
        align: "center",
      },
    },
  ];

  return (
    <div>
      <DataTableToolbar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search product, pack size or SKU..."
      />

      <DataTable
        columns={columns}
        data={data}
        emptyMessage="No products found."
      />
    </div>
  );
}

export default ProductList;