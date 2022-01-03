import { useMemo } from "react";

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
        style={{ width: '90px', marginRight: '0.5rem' }}
        className="pl-2 pr-1 py-1 rounded-lg text-sm"
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
        style={{ width: '90px', marginLeft: '0.5rem' }}
        className="pl-2 pr-1 py-1 rounded-lg text-sm"
      />
    </div>
  )
};

export default NumberRangeColumnFilter;