import { useMemo, forwardRef, useRef, useEffect } from "react";
import { useTable, useFilters, useRowSelect } from "react-table";

import TextColumnFilter from "./tableFilters/textColumnFilter";

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef()
  const resolvedRef = ref || defaultRef

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return <input type="checkbox" ref={resolvedRef} {...rest} />
})

const CarsTable = ({ columns, data }) => {

  const defaultColumn = useMemo(() => ({ Filter: TextColumnFilter }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useRowSelect
  );

  const getColWidth = colId => {
    switch(colId) {
      case 'selection':
        return '60px';
      default:
        return '16%';
    }
  };

  return (
    <table {...getTableProps()} className="w-full rounded-2xl overflow-hidden drop-shadow">
      <thead className="bg-gray2 border-b border-primary">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ width: getColWidth(column.id) }}>
                {column.render('Header')}
                <div className="pb-1">{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="tableChild">
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} className="text-center">{cell.render('Cell')}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CarsTable;