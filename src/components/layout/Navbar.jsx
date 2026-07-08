const Navbar = () => {
  return (
    <header className="flex h-14 items-center justify-between bg-white px-4 shadow">
      <h1 className="font-semibold text-gray-700">Universal Crop Care (UCC)</h1>

      <button className="rounded bg-red-500 px-3 py-1 text-white">
        Logout
      </button>
    </header>
  );
};

export default Navbar;
