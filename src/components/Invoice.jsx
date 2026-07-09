import Logo from "../assets/logo.png";

const Invoice = ({ invoice }) => {
  const subtotal = invoice.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );
  const totalQty = invoice.items.reduce(
    (sum, item) => sum + Number(item.quantity || 0),
    0,
  );

  const handlePrint = () => window.print();

  return (
    <div className="p-4">
      {/* ===== PRINT AREA ===== */}
      <div
        className="invoice-print-area bg-white p-6 text-black border rounded shadow"
        style={{ boxSizing: "border-box", margin: "15px" }}
      >
        {/* Header */}
        <div className="invoice-header mb-4">
          <div className="text-center my-4 w-[60%] m-auto">
            <h2 className="border-b-1 uppercase border-black px-8 py-1 text-base font-bold tracking-widest">
              Credit Sells Invoice
            </h2>
          </div>

          <div className="grid grid-cols-[1.2fr_3fr_1.3fr] items-center gap-4 text-xs">
            {/* Logo */}
            <div className="flex justify-start">
              <img
                src={Logo}
                alt="UCC Logo"
                className="w-18 h-18 object-contain"
              />
            </div>

            {/* Company Info */}
            <div className="text-center">
              <h3 className="text-xl font-extrabold tracking-wide uppercase">
                Universal Crop Care
              </h3>
              <p className="text-[11px] leading-snug mt-1">
                BSCIC Industrial Area, Joypurhat
                <br />
                Email: universalcorpcare23@gmail.com
              </p>
            </div>

            {/* Slogan */}
            <div className="flex justify-end">
              <span className="font-semibold text-center text-sm leading-snug italic">
                কৃষকের উন্নয়ন আমাদের <br /> অঙ্গীকার
              </span>
            </div>
          </div>
        </div>

        <hr className="my-4 border-black" />

        <div className="grid grid-cols-[2fr_1.8fr_1fr] text-xs gap-4 mt-4">
          {/* ===== Customer Info ===== */}
          <div className="space-y-1">
            <p>
              <strong>To: </strong>
              {invoice.customer.business || "Traders"}
            </p>
            <p>
              <strong>Pro: </strong>
              {invoice.customer.name}
            </p>
            <p>
              <strong>Address: </strong>
              {invoice.customer.address}
            </p>
            <p>
              <strong>Mobile: </strong>
              {invoice.customer.mobile}
            </p>
          </div>

          {/* ===== Officer Info ===== */}
          <div className="text-left space-y-1">
            <p>
              <strong>Officer:</strong> {invoice.officer?.name || "N/A"}
            </p>
            <p>
              <strong>Phone:</strong> {invoice.officer?.phone || "N/A"}
            </p>
          </div>

          {/* ===== Invoice Info ===== */}
          <div className="text-left space-y-1">
            <p>
              <strong>Date:</strong> {invoice.date || "Today"}
            </p>
            <p>
              <strong>Invoice #:</strong> {invoice.id}
            </p>
            <p>
              <strong>Customer ID:</strong> N/A
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border text-xs">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">SN</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Pack Size</th>
                <th className="border p-2">Qty</th>
                <th className="border p-2">Unit Price</th>
                <th className="border p-2">Line Total</th>
              </tr>
            </thead>

            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2 text-center">{index + 1}</td>

                  <td className="border p-2">{item.productName || "-"}</td>

                  <td className="border p-2 text-center">
                    {item.packSizeLabel || "-"}
                  </td>

                  <td className="border p-2 text-center">{item.quantity}</td>

                  <td className="border p-2 text-right">
                    {Number(item.price || 0).toFixed(2)}
                  </td>

                  <td className="border p-2 text-right">
                    {(item.quantity * Number(item.price || 0)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ border: "1px solid #fff" }} className="font-bold">
                <td className="border-none"></td>
                <td className="text-right border-none"></td>
                <td className="border text-center text-sm"> Total Qnt = </td>
                <td className="text-center text-sm border">{totalQty}</td>
                <td className="border-none"></td>
                <td className="border-none"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Declaration & Totals */}
        <div className="flex mt-5 flex-col md:flex-row gap-4 items-stretch print:flex-row print:gap-4">
          {/* Declaration – 70% */}
          <div
            className="border p-3 text-[11px] rounded leading-snug flex-shrink-0"
            style={{ width: "68%" }}
          >
            <p className="mb-2">
              <strong>প্রতিজ্ঞা পত্র-</strong> আমরা এখানে অঙ্গীকার করিতেছি এবং
              আশ্বাস দিতেছি যে আমাদের বিক্রিত সামগ্রী ১৯৪০ সনের ঔষধ আইনের ১৮ নং
              ধারা লংঘন করে না। আমরা ফেরত নিবার অঙ্গীকার করি না (ভুল ত্রুটি
              মার্জনীয়)।
            </p>
            <p className="font-bold">
              "উল্লেখিত ক্যাশ বোনাস, প্রোডাক্ট বোনাস সহ সকল মাল ভাল অবস্থায়
              বুঝিয়া পাইলাম।"
            </p>
          </div>

          {/* Totals – 30% */}
          <div
            className="flex justify-end flex-shrink-0"
            style={{ width: "30%" }}
          >
            <div className="bg-white shadow rounded border p-3 w-full h-full flex flex-col justify-between">
              <table className="w-full text-xs border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="pr-4 font-medium">Subtotal = </td>
                    <td className="text-right">{subtotal.toFixed(2)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="pr-4 font-medium">Sales Tax = </td>
                    <td className="text-right">0.00</td>
                  </tr>
                  <tr className="font-bold text-sm">
                    <td className="pr-4">Total = </td>
                    <td className="text-right">{subtotal.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Signature Row */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="text-left text-xs space-y-2">
            <p>ক্রেতার স্বাক্ষর:</p>
            <p>তারিখ:</p>
            <div className="h-12 border-b mt-1 w-2/3"></div>
            <p className="mt-4">সিল</p>
          </div>
          <div className="text-right text-xs flex flex-col justify-end items-end">
            <div className="h-12 border-b mt-1 w-2/3"></div>
            <p className="mt-4">Universal Crop Care</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2 no-print">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700 transition"
        >
          🖨️ Print
        </button>
      </div>

      {/* Print CSS */}
      <style>
        {`
          @media print {
            body * { visibility: hidden; }
            .invoice-print-area, .invoice-print-area * { visibility: visible; }
            .invoice-print-area {
              position: absolute;
              left: 4px;
              right: 4px;
              top: 30px;
              width: calc(100% - 30px);
              box-sizing: border-box;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Invoice;
