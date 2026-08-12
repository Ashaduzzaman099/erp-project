function DataTableToolbar({
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search...",
  children,
}) {
  return (
    <div className="mb-4 flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Search */}
      <div className="w-full sm:max-w-sm">
        <input
          type="text"
          value={searchValue}
          onChange={(event) => onSearchChange?.(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Actions / Filters */}
      <div className="flex items-center gap-2">
        {children}
      </div>
    </div>
    
  );
}

export default DataTableToolbar;