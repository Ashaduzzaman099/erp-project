const Navbar = () => {
  return (
    <div className="h-14 bg-white shadow flex items-center justify-between px-4">
      <h1 className="font-semibold text-gray-700">Universal Crop Care (UCC)</h1>
      <button className="bg-red-500 text-white px-3 py-1 rounded">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
