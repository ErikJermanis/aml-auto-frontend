import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';

import { useGetData } from "../../customHooks/useGetData";

const CardCell = ({ title, children }) => {
  return (
    <div>
      <p className="font-bold text-xl mb-3">{title}</p>
      {children}
    </div>
  )
}

const ReservationCard = ({ reservation }) => {

  const { id, car, puDatetime, puLocation, doDatetime, doLocation, email, price } = reservation;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 my-4">
      <h6 className="font-semibold text-lg">Reservation {id}</h6>
      <div className="flex justify-between mt-6 w-full">
        <CardCell title="Car">{car}</CardCell>
        <CardCell title="Pick-up">
          <p>{puLocation}</p>
          <p>{puDatetime.split('T').join(' at ')}</p>
        </CardCell>
        <CardCell title="Drop-off">
          <p>{doLocation}</p>
          <p>{doDatetime.split('T').join(' at ')}</p>
        </CardCell>
        <CardCell title="Price">{price} €</CardCell>
        <CardCell title="User">{email}</CardCell>
      </div>
    </div>
  )
};

const ReservationList = () => {
  const { data, loading } = useGetData('/reservations');

  return (
    <div className="p-2">
      <div className="flex items-center">
        <h2 className="font-bold text-2xl m-8">Reservation list</h2>
      </div>
      {loading && <p>Loading...</p>}
      {data && data.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} />)}
    </div>
  )
}

export default ReservationList;