import { collection } from "firebase/firestore";

import { db } from '../../firebase-config';
import { useGetData } from '../../customHooks/useGetData';

import TextLogo from "../../components/textLogo";
import Button from "../../components/button";

const CardLabel = ({ title, children }) => <p className="mb-1"><span className="text-sm">{title}:</span> {children}</p>;

const FeatureLabel = ({ children }) => <span className="text-sm bg-secondary rounded-full px-1.5 m-1">{children}</span>

const CarCard = ({ car }) => {
  const { image, name, brand, numberOfDoors, numberOfSeats, enginePower, engineType, transmission, additionalFeatures, price } = car;

  return (
    <div className="p-3 w-1/3">
      <div className="bg-white rounded-2xl overflow-hidden">
        <img src={image} alt={name} className="h-56 w-full object-cover" />
        <div className="p-3">
          <h6 className="font-medium text-primary text-lg mb-4">{brand} | {name}</h6>
          <CardLabel title="Number of seats">{numberOfSeats}</CardLabel>
          <CardLabel title="Number of doors">{numberOfDoors}</CardLabel>
          <CardLabel title="Engine power">{enginePower} kW</CardLabel>
          <CardLabel title="Engine type">{engineType}</CardLabel>
          <CardLabel title="Transmission">{transmission}</CardLabel>
          <div className="flex flex-wrap my-4">
            {additionalFeatures.map((feature, index) => <FeatureLabel key={index}>{feature}</FeatureLabel>)}
          </div>
          <div className="flex justify-between items-center">
            <p className="font-medium text-primary text-lg">from {Math.round(price * 0.6)}€ / day</p>
            <Button primary>Book</Button>
          </div>
        </div>
      </div>
    </div>
  )
};

const OurFleet = () => {
  const carsCollectionRef = collection(db, 'cars');

  const { data, loading, error } = useGetData(carsCollectionRef);

  return (
    <div className="py-16">
      <h2 className="font-bold text-3xl text-center my-24"><TextLogo /> fleet</h2>
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-start">
        {loading && <p>Loading...</p>}
        {error && <p className="text-center w-full bg-red-200 text-red-700 font-semibold text-lg rounded-lg drop-shadow-lg p-4">{error}</p>}
        {data && data.map((car, index) => <CarCard key={index} car={car} />)}
      </div>
    </div>
  )
}

export default OurFleet;