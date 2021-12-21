import TextLogo from "../../components/textLogo";
import Button from "../../components/button";

const dummyData = [
  {
    id: 1,
    brand: "Mercedes",
    name: "C-Class",
    numberOfSeats: 5,
    numberOfDoors: 4,
    enginePower: 205,
    engineType: 'plug-in hybrid petrol',
    transmission: '9-speed-automatic',
    image: "https://www.topgear.com/sites/default/files/cars-car/image/2021/07/rimacnevera-26_0.jpg",
    features: ['parking sensor', 'bluetooth', 'heated seats', 'android auto', 'apple car-play'],
    price: 235
  },
  {
    id: 2,
    brand: "Mercedes",
    name: "C-Class",
    numberOfSeats: 5,
    numberOfDoors: 4,
    enginePower: 205,
    engineType: 'plug-in hybrid petrol',
    transmission: '9-speed-automatic',
    image: "https://www.topgear.com/sites/default/files/cars-car/image/2021/07/rimacnevera-26_0.jpg",
    features: ['parking sensor', 'bluetooth', 'heated seats', 'android auto', 'apple car-play'],
    price: 235
  },
  {
    id: 3,
    brand: "Mercedes",
    name: "C-Class",
    numberOfSeats: 5,
    numberOfDoors: 4,
    enginePower: 205,
    engineType: 'plug-in hybrid petrol',
    transmission: '9-speed-automatic',
    image: "https://www.topgear.com/sites/default/files/cars-car/image/2021/07/rimacnevera-26_0.jpg",
    features: ['parking sensor', 'bluetooth', 'heated seats', 'android auto', 'apple car-play'],
    price: 235
  },
  {
    id: 4,
    brand: "Mercedes",
    name: "C-Class",
    numberOfSeats: 5,
    numberOfDoors: 4,
    enginePower: 205,
    engineType: 'plug-in hybrid petrol',
    transmission: '9-speed-automatic',
    image: "https://www.topgear.com/sites/default/files/cars-car/image/2021/07/rimacnevera-26_0.jpg",
    features: ['parking sensor', 'bluetooth', 'heated seats', 'android auto', 'apple car-play'],
    price: 235
  },
];

const CardLabel = ({ title, children }) => <p className="mb-1"><span className="text-sm">{title}:</span> {children}</p>;

const FeatureLabel = ({ children }) => <span className="text-sm bg-secondary rounded-full px-1.5 m-1">{children}</span>

const CarCard = ({ car }) => {
  const { image, name, brand, numberOfDoors, numberOfSeats, enginePower, engineType, transmission, features, price } = car;

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
            {features.map((feature, index) => <FeatureLabel key={index}>{feature}</FeatureLabel>)}
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
  return (
    <div className="py-16">
      <h2 className="font-bold text-3xl text-center my-24"><TextLogo /> fleet</h2>
      <div className="max-w-screen-xl mx-auto flex flex-wrap">
        {
          dummyData.map(car => (
            <CarCard car={car} key={car.id} />
          ))
        }
      </div>
    </div>
  )
}

export default OurFleet;