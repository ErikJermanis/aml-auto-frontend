import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import axios from "axios";

import { useAuth } from "../../contexts/AuthContext";
import { useGetData } from "../../customHooks/useGetData";

import CarsTable from "../../components/carsTable";
import SelectColumnFilter from "../../components/tableFilters/selectColumnFilter";
import NumberRangeColumnFilter from "../../components/tableFilters/numberRangeColumnFilter";
import Button from "../../components/button";

const CarList = () => {
  const { data, loading } = useGetData('/cars');

  const { userToken } = useAuth();

  const [dataState, setDataState] = useState(null);

  useEffect(() => {
    setDataState(data);
  }, [data]);

  const tableData = useMemo(() => dataState, [dataState]);

  const deleteCar = async id => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_DOMAIN}/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });
      setDataState(current => current.filter(car => car.id !== id));
    } catch(error) {
      console.log(error);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Brand',
        accessor: 'brand'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
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
      },
      {
        Header: '',
        accessor: 'actions',
        disableFilters: true,
        Cell: cell => <div className="flex justify-center items-center w-full py-2">
          <Link to={`edit/${cell.row.original.id}`} state={cell.row.original}><FaRegEdit className="w-6 h-6 mx-2 p-0.5 text-gray-500 hover:text-gray-700 cursor-pointer" /></Link>
          <FaRegTrashAlt onClick={() => deleteCar(cell.row.original.id)} className="w-6 h-6 mx-2 p-0.5 text-red-400 hover:text-red-600 cursor-pointer" />
        </div>
      }
    ],
    []
  );

  return (
    <div className="p-2">
      <div className="flex items-center">
        <h2 className="font-bold text-2xl m-8">Manage cars</h2>
        <Link to="new"><Button primary>Add new</Button></Link>
      </div>
      {loading && <p>Loading...</p>}
      {dataState && <CarsTable data={tableData} columns={columns} />}
    </div>
  )
}

export default CarList;
