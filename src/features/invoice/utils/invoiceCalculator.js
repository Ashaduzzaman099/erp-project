export const calculateLineTotal = (item) => {
  return Number(item.quantity || 0) * Number(item.price || 0);
};

export const calculateSubtotal = (items) => {
  return items.reduce(
    (total, item) => total + calculateLineTotal(item),
    0
  );
};

export const calculateTotalQty = (items) => {
  return items.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );
};

export const calculateGrandTotal = (
  items,
  tax = 0,
  discount = 0
) => {
  const subtotal = calculateSubtotal(items);

  return subtotal + tax - discount;
};