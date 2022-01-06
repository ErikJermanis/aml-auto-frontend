import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import { useGetData } from '../../customHooks/useGetData';

import InputGroup from "../../components/inputGroup";
import InputSelect from "../../components/inputSelect";
import Button from "../../components/button";

const locations = [
  { value: "Rijeka", label: "Rijeka" },
  { value: "Split", label: "Split" },
  { value: "Zagreb", label: "Zagreb" },
  { value: "Zadar", label: "Zadar" },
  { value: "Osijek", label: "Osijek" },
];

const FormRow = ({ label, children }) => (
  <div className="flex items-center justify-evenly border-b border-gray-400 py-3">
    <p className="w-5/12 font-semibold text-gray-700 text-lg">{label}</p>
    {children}
  </div>
);

const BookACar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data } = useGetData('/cars');

  const carRef = useRef();
  const puLocationRef = useRef();
  const doLocationRef = useRef();
  const puDatetimeRef = useRef();
  const doDatetimeRef = useRef();
  const emailRef = useRef();

  const [cars, setCars] = useState([]);

  useEffect(() => {
    if(data) {
      if(searchParams.get('car')) {
        const foundCar = data.find(car => car.id === searchParams.get('car'));
        carRef.current.setValue({ value: `${foundCar.price}`, label: `${foundCar.brand} ${foundCar.name}` });
      }
      setCars(data.map(car => ({ value: `${car.price}`, label: `${car.brand} ${car.name}` })));
    }
  }, [searchParams, data]);

  const onSubmit = async e => {
    e.preventDefault();

    const startDate = new Date(puDatetimeRef.current.value);
    const endDate = new Date(doDatetimeRef.current.value);
    const rentDuration = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const carPrice = carRef.current.props.value.value;
    const priceCycles = Math.floor(Math.floor(rentDuration) / 3);
    let discountSum = 0;
    let discountRate = 20;
    for(let i = 0; i < priceCycles; i++) {
      discountSum += discountRate;
      discountRate = discountRate / 2;
    }
    const finalPrice = carPrice * rentDuration * ((100 - discountSum) / 100);

    Swal.fire({
      icon: null,
      title: 'One last step!',
      html: `<div>
        <p>Your car: <span className="font-semibold">${carRef.current.props.value.label}</span></p>
        <p>Pick-up: <span className="font-semibold">${puLocationRef.current.props.value.value}, ${puDatetimeRef.current.value.split('T').join(' at ')}</span></p>
        <p>Drop-off: <span className="font-semibold">${doLocationRef.current.props.value.value}, ${doDatetimeRef.current.value.split('T').join(' at ')}</span></p>
        <p>Your email address: <span className="font-semibold">${emailRef.current.value}</span></p>
        <p>Price: <span className="font-semibold">${finalPrice.toFixed(2)}€</span></p>
      </div>`,
      confirmButtonText: 'Book',
    }).then(async res => {
      if(res.isConfirmed) {
        await axios.post(`${process.env.REACT_APP_API_DOMAIN}/reservations`, {
          email: emailRef.current.value,
          puLocation: puLocationRef.current.props.value.value,
          puDatetime: puDatetimeRef.current.value,
          doLocation: doLocationRef.current.props.value.value,
          doDatetime: doDatetimeRef.current.value,
          car: carRef.current.props.value.label,
          price: finalPrice.toFixed(2),
        });
        navigate('/');
      }
    })
  };

  return (
    <div className="py-16">
      <h2 className="font-bold text-3xl text-center my-24">Book a car</h2>
      <form onSubmit={onSubmit} className="w-1/2 m-auto flex flex-col">
        <FormRow label="Car">
          <InputSelect className="w-1/2" options={cars} ref={carRef} />
        </FormRow>
        <FormRow label="Pick-up date and time">
          <InputGroup className="w-1/2" type="datetime-local" ref={puDatetimeRef} />
        </FormRow>
        <FormRow label="Pick-up location">
          <InputSelect className="w-1/2" options={locations} ref={puLocationRef} />
        </FormRow>
        <FormRow label="Drop-off date and time">
          <InputGroup className="w-1/2" type="datetime-local" ref={doDatetimeRef} />
        </FormRow>
        <FormRow label="Drop-off location">
          <InputSelect className="w-1/2" options={locations} ref={doLocationRef} />
        </FormRow>
        <FormRow label="Your best email">
          <InputGroup className="w-1/2" ref={emailRef} />
        </FormRow>
        <Button type="submit" primary className="m-4 self-center">Calculate price</Button>
      </form>
    </div>
  )
}

export default BookACar;