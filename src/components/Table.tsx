import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { SalesRow } from "../mocks";
import { FC } from "react";
import { ItemComponent } from "../App";

const columnHelper = createColumnHelper<SalesRow>();
const columns = [
  columnHelper.accessor("weekEnding", {
    header: () => <span>WEEK ENDING</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("retailSales", {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("wholesaleSales", {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("unitsSold", {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("retailerMargin", {
    cell: info => info.getValue(),
  }),
]

const Table: FC<ItemComponent> = ({ item }) => {
  const table = useReactTable({
    data: item.sales,
    columns,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <div className="bg-white p-5 shadow-lg rounded-lg">

      <table>
        <thead>
          {
            table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {
                  headerGroup.headers.map(header => (
                    <th key={header.id}>
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
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
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