import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import Dashboard from "../../pages/Dashboard";
import InvoiceCreate from "../../pages/invoices/InvoiceCreate";

// import AddProduct from "../../pages/products/AddProduct";
// import ViewAllProducts from "../../pages/products/ViewAllProducts";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />

          {/* Invoice */}
          <Route path="/invoices/create" element={<InvoiceCreate />} />

          {/* Products */}
          {/* <Route path="/products/create" element={<AddProduct />} />
          <Route path="/products" element={<ViewAllProducts />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
