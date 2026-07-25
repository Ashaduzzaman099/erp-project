import productService from "../services/productService";

function ProductList() {
  const products = productService.getAll();

  const rows = products.flatMap((product) =>
    product.packSizes.map((variant) => ({
      productId: product.id,
      productName: product.name,
      variantId: variant.optionId,
      packSize: variant.label,
      unitPrice: variant.unitPrice,
    }))
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Product
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Pack Size
            </th>

            <th className="px-4 py-3 text-right text-sm font-semibold">
              Unit Price
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.variantId}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-4 py-3">
                {row.productName}
              </td>

              <td className="px-4 py-3">
                {row.packSize}
              </td>

              <td className="px-4 py-3 text-right">
                {row.unitPrice.toLocaleString()}
              </td>
            </tr>
          ))}

          {rows.length === 0 && (
            <tr>
              <td
                colSpan={3}
                className="px-4 py-6 text-center text-gray-500"
              >
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;