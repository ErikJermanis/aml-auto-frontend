const TextColumnFilter = ({ column: { filterValue, preFilteredRows, setFilter } }) => (
  <input
    value={filterValue || ''}
    onChange={e => {
      setFilter(e.target.value || undefined)
    }}
    placeholder={`Search ${preFilteredRows.length} records...`}
    className="px-2 py-1 rounded-lg text-sm"
  />
);

export default TextColumnFilter;