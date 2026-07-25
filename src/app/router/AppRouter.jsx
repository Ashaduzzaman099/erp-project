import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import Dashboard from "../../pages/Dashboard";
import InvoiceCreate from "../../pages/invoices/InvoiceCreate";

import ProductPage from "../../features/product/pages/ProductPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />

          {/* Invoice */}
          <Route path="/invoices/create" element={<InvoiceCreate />} />

          {/* Products */}
          <Route path="/products" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;