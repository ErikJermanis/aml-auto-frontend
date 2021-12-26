import { useMemo, forwardRef, useRef, useEffect } from "react";
import { useTable, useFilters, useRowSelect } from "react-table";

const CarList = () => {

  const data = useMemo(
    () => [
      {
        "id": "1qG7weBigYENqj1qRMXe",
        "enginePower": 91,
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-nissan-versa-101-1555093621.jpg?crop=0.872xw:0.736xh;0.0353xw,0.219xh&resize=2048:*",
        "engineType": "diesel",
        "additionalFeatures": [
          "Apple CarPlay",
          "Android Auto"
        ],
        "createdAt": "2021-12-26T15:40:22.294Z",
        "transmission": "5-speed manual",
        "brand": "Nissan",
        "bodyType": "sedan",
        "price": 54,
        "name": "Versa",
        "numberOfDoors": 5,
        "numberOfSeats": 5
      },
      {
        "id": "I5o0Ea1IRPT15FZRmSfs",
        "enginePower": 313,
        "engineType": "diesel",
        "createdAt": "2021-12-26T15:49:44.006Z",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-tahoe-rst-101-1632768222.jpg?crop=0.599xw:0.505xh;0.242xw,0.120xh&resize=2048:*",
        "additionalFeatures": [
          "Apple CarPlay",
          "Android Auto"
        ],
        "name": "Tahoe",
        "transmission": "10-speed automatic",
        "numberOfDoors": 5,
        "brand": "Chevrolet",
        "numberOfSeats": 5,
        "bodyType": "sport-utility vehicle (suv)",
        "price": 171
      },
      {
        "id": "MuMpbz8Ay3EmZANUoVN3",
        "name": "Charger",
        "price": 135,
        "brand": "Dodge",
        "engineType": "petrol",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-dodge-charger-mmp-1-1634162897.jpg?crop=0.901xw:0.760xh;0.0449xw,0.0865xh&resize=2048:*",
        "numberOfDoors": 5,
        "numberOfSeats": 5,
        "additionalFeatures": [
          "Apple CarPlay",
          "Android Auto"
        ],
        "bodyType": "sedan",
        "transmission": "8-speed automatic",
        "enginePower": 276,
        "createdAt": "2021-12-26T15:43:33.968Z"
      },
      {
        "id": "evmNESkf7MYsNUi9yAls",
        "transmission": "6-speed automatic",
        "enginePower": 110,
        "engineType": "diesel",
        "numberOfDoors": 5,
        "name": "Kona",
        "numberOfSeats": 5,
        "additionalFeatures": [
          "Apple CarPlay",
          "Android Auto"
        ],
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-hyundai-kona-n-line-awd-371-1635740332-mmp-1-1635778298.jpg?crop=0.936xw:0.988xh;0.0369xw,0.0120xh&resize=2048:*",
        "brand": "Hyundai",
        "bodyType": "sport-utility vehicle (suv)",
        "createdAt": "2021-12-26T15:47:53.513Z",
        "price": 72
      },
      {
        "id": "gYQJec40aLEdwCD76NHc",
        "createdAt": "2021-12-26T15:53:09.695Z",
        "numberOfSeats": 5,
        "name": "Ridgeline",
        "enginePower": 209,
        "brand": "Honda",
        "engineType": "diesel",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-honda-ridgeline-sport-113-1632494094.jpg?crop=0.736xw:0.619xh;0.00160xw,0.381xh&resize=2048:*",
        "additionalFeatures": [
          "Apple CarPlay",
          "Android Auto"
        ],
        "bodyType": "pickup truck",
        "numberOfDoors": 5,
        "transmission": "9-speed automatic",
        "price": 120
      },
      {
        "id": "sgW9MMNa9aWs90yzzome",
        "numberOfSeats": 5,
        "transmission": "6-speed manual",
        "createdAt": "2021-12-26T15:45:38.105Z",
        "engineType": "petrol",
        "price": 72,
        "bodyType": "sedan",
        "numberOfDoors": 5,
        "name": "Civic",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-honda-civic-sedan-110-1623810388.jpg?crop=0.796xw:0.673xh;0.0817xw,0.219xh&resize=2048:*",
        "enginePower": 118,
        "brand": "Honda",
        "additionalFeatures": [
          "Apple CarPlay",
          "Android Auto"
        ]
      }
    ],
    []
  );

  const NumberRangeColumnFilter = ({ column: { filterValue = [], preFilteredRows, setFilter, id } }) => {
    const [min, max] = useMemo(() => {
      let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      preFilteredRows.forEach(row => {
        min = Math.min(row.values[id], min)
        max = Math.max(row.values[id], max)
      })
      return [min, max]
    }, [id, preFilteredRows])
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }} >
        <input
          value={filterValue[0] || ''}
          type="number"
          onChange={e => {
            const val = e.target.value
            setFilter([val ? Number(val) : undefined, filterValue[1]])
          }}
          placeholder={`Min (${min})`}
          style={{ width: '70px', marginRight: '0.5rem' }}
        />
        to
        <input
          value={filterValue[1] || ''}
          type="number"
          onChange={e => {
            const val = e.target.value
            setFilter([filterValue[0], val ? Number(val) : undefined])
          }}
          placeholder={`Max (${max})`}
          style={{ width: '70px', marginLeft: '0.5rem' }}
        />
      </div>
    )
  }

  const SelectColumnFilter = ({ column: { filterValue, setFilter, preFilteredRows, id } }) => {
    const options = useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
  
    return (
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }

  const DefaultColumnFilter = ({ column: { filterValue, preFilteredRows, setFilter } }) => {
    const count = preFilteredRows.length
  
    return (
      <input
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
        placeholder={`Search ${count} records...`}
      />
    )
  }

  const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return <input type="checkbox" ref={resolvedRef} {...rest} />
  })

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Brand',
            accessor: 'brand'
          },
          {
            Header: 'Name',
            accessor: 'name'
          }
        ]
      },
      {
        Header: 'Properties',
        columns: [
          {
            Header: 'Engine type',
            accessor: 'engineType',
            Filter: SelectColumnFilter
          },
          {
            Header: 'Body type',
            accessor: 'bodyType',
            Filter: SelectColumnFilter
          },
          {
            Header: 'Price',
            accessor: 'price',
            Filter: NumberRangeColumnFilter,
            filter: 'between'
          }
        ]
      },
      {
        Header: 'Zašto baš ti?',
        accessor: 'actions',
        disableFilters: true
      }
    ],
    []
  );

  const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    selectedFlatRows,
    state: { selectedRowIds },
    prepareRow,
  } = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  );

  return (
    <div className="p-2">
      <h2 className="font-bold text-2xl m-8">Manage cars</h2>

      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CarList;
