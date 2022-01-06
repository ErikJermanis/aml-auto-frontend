import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';

import { useGetData } from "../../customHooks/useGetData";

const ReservationList = () => {
  const { data, loading } = useGetData('/reservations');

  return (
    <div className="p-2">
      <div className="flex items-center">
        <h2 className="font-bold text-2xl m-8">Reservation list</h2>
      </div>
      {loading && <p>Loading...</p>}
      {data && data.map(reservation => (
        <div>{reservation.id}</div>
      ))}
      <div className="bg-white rounded-lg shadow-lg p-4 my-4">
        <h6 className="font-semibold text-lg">Reservaion fdsha8</h6>
      </div>
    </div>
  )
}

export default ReservationList;