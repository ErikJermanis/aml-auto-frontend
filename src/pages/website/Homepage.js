import { Link } from 'react-router-dom';

import Button from '../../components/button';

import { ReactComponent as CarsSvg } from '../../assets/illustrations/cars.svg';

const HPcard = ({ title, children }) => (
  <div className='w-1/4 bg-white rounded-3xl p-6 mx-4'>
    <h3 className='font-bold text-2xl text-center mb-6'>{title}</h3>
    <p className='text-center'>{children}</p>
  </div>
)

const Homepage = () => {
  return (
    <>
    <div className="h-screen pt-16 flex items-center justify-evenly">
      <div className="w-2/5">
        <h1 className="text-4xl font-bold bg-orange-500">Easy and fast way to rent your next car</h1>
        <p className="my-9">We offer premium services and cars to ensure that you enjoy your drive in Croatia with comfort and style. We offer a wide choice of vehicles at affordable prices, as well as the useful additional services which will make your journey more simple and interesting.</p>
        <div>
          <Link to="book"><Button primary className="mr-4">Book a car</Button></Link>
          <Link to="cars"><Button secondary>Browse fleet</Button></Link>
        </div>
      </div>
      <CarsSvg className="w-1/5" />
    </div>
    <div className='py-32 flex justify-center items-start'>
      <HPcard title="Fast & easy booking">We strive to make the car rental process at AML Auto pleasurable allowing you to make your reservations swiftly through online booking.</HPcard>
      <HPcard title="Many pickup locations">Pick-up your rental car at one of the many AML Auto locations throughout Croatia. Explore the nearby area or venture out to different cities or even countries and drop the car off at a place of your choosing.</HPcard>
      <HPcard title="Satisfied customers">With more than 2000 satisfied customers we are sure we will be the right ones for you.</HPcard>
    </div>
    </>
  )
}

export default Homepage;