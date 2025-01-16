import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { SalesRow } from "../mocks";
import { FC } from "react";
import { ItemComponent } from "../App";

const columnHelper = createColumnHelper<SalesRow>();

const formatMoney = new Intl.NumberFormat('en-US', { // Default, can add in other locales / currencies in the future
    style: 'currency',
    currency: 'USD'
}).format;

const formatDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${month}-${day}-${Number.parseInt(year) % 100}`
};

const columns = [
  columnHelper.accessor("weekEnding", {
    header: () => "WEEK ENDING",
    cell: info => formatDate(info.getValue()),
  }),
  columnHelper.accessor("retailSales", {
    header: () => "RETAIL SALES",
    cell: info => formatMoney(info.getValue()),
  }),
  columnHelper.accessor("wholesaleSales", {
    header: () => "WHOLESALE SALES",
    cell: info => formatMoney(info.getValue()),
  }),
  columnHelper.accessor("unitsSold", {
    header: () => "UNITS SOLD",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("retailerMargin", {
    header: () => "RETAILER MARGIN",
    cell: info => formatMoney(info.getValue()),
  }),
]

const Table: FC<ItemComponent> = ({ item }) => {
  const table = useReactTable({
    data: item.sales,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <div className="bg-white p-5 shadow rounded-lg">

      <table className="w-full">
        <thead>
          {
            table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {
                  headerGroup.headers.map(header => (
                    <th key={header.id} className="px-4 py-2 font-semibold text-sm">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))
                }
              </tr>
            ))
          }

        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-t">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="text-gray-500 text-center p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Table;