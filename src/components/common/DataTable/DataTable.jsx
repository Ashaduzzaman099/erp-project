import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

function DataTable({
  columns,
  data,
  emptyMessage = "No data found.",
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const getAlignClass = (align = "left") => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="max-h-[600px] overflow-auto">
        <table className="min-w-full">
          <thead className="sticky top-0 z-10 bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const meta = header.column.columnDef.meta ?? {};

                  return (
                    <th
                      key={header.id}
                      style={{ width: meta.width }}
                      className={`px-4 py-3 text-sm font-semibold text-gray-700 ${getAlignClass(
                        meta.align
                      )}`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-t even:bg-gray-50 hover:bg-blue-50 transition"
                >
                  {row.getVisibleCells().map((cell) => {
                    const meta = cell.column.columnDef.meta ?? {};

                    return (
                      <td
                        key={cell.id}
                        className={`px-4 py-3 text-sm text-gray-700 ${getAlignClass(
                          meta.align
                        )} ${meta.cellClassName ?? ""}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-10 text-center text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;