import customers from "../data/customers";

const customerService = {
  getAll() {
    return customers;
  },

  getByOfficerId(officerId) {
    return customers.filter(
      (customer) => customer.officerId === officerId
    );
  },

  getById(id) {
    return customers.find(
      (customer) => customer.id === id
    );
  },
};

export default customerService;