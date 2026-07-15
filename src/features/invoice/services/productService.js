import products from "../../../data/products";

const productService = {
  getAll() {
    return products;
  },

  getById(id) {
    return products.find((product) => String(product.id) === String(id));
  },
};

export default productService;
