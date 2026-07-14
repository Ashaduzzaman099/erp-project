import products from "../data/products";

const productService = {
  getAll() {
    return products;
  },

  getById(id) {
    return products.find(
      (product) => product.id === id
    );
  },
};

export default productService;