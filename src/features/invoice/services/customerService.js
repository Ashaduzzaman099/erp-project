import customers from "../../../data/customers";

const customerService = {
  getAll() {
    return customers;
  },

  getByOfficerId(officerId) {
    return customers.filter(
      (customer) => String(customer.officerId) === String(officerId),
    );
  },

  getById(id) {
    return customers.find((customer) => String(customer.id) === String(id));
  },
};

export default customerService;
