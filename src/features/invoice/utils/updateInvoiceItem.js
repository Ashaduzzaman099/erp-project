const updateInvoiceItem = (items, index, updatedData) => {
  const updatedItems = [...items];

  updatedItems[index] = {
    ...updatedItems[index],
    ...updatedData,
  };

  return updatedItems;
};

export default updateInvoiceItem;