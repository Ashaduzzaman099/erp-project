import ProductList from "../components/ProductList";

function ProductPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage all products and their variants.
          </p>
        </div>

        <button
          type="button"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          + Add Product
        </button>
      </div>

      {/* Product Table */}
      <ProductList />
    </div>
  );
}

export default ProductPage;