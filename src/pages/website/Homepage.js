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
        <p className="my-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu tellus, accumsan sed elit iaculis, pulvinar feugiat metus. Nam sed diam purus. Morbi at gravida nisi, quis lobortis massa.</p>
        <div>
          <Button primary className="mr-4">Book a car</Button>
          <Link to="cars"><Button secondary>Browse fleet</Button></Link>
        </div>
      </div>
      <CarsSvg className="w-1/5" />
    </div>
    <div className='py-32 flex justify-center items-start'>
      <HPcard title="Fast & easy booking">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu tellus, accumsan sed elit iaculis, pulvinar feugiat metus. Nam sed diam purus. Morbi at gravida nisi, quis lobortis massa.</HPcard>
      <HPcard title="Many pickup locations">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu tellus, accumsan sed elit iaculis, pulvinar feugiat metus. Nam sed diam purus. Morbi at gravida nisi, quis lobortis massa. Vivamus sapien turpis, vehicula sed ligula eu, suscipit iaculis nunc. Phasellus suscipit efficitur odio eget dapibus. Sed convallis posuere justo.</HPcard>
      <HPcard title="Satisfied customers">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu tellus, accumsan sed elit iaculis, pulvinar feugiat metus. Nam sed diam purus. Morbi at gravida nisi, quis lobortis massa. Vivamus sapien turpis, vehicula sed ligula eu, suscipit iaculis nunc. Phasellus suscipit efficitur odio eget dapibus. Sed convallis posuere justo. Vestibulum vulputate egestas quam in sollicitudin. Mauris interdum orci sem. Praesent vitae magna nec turpis pharetra maximus. Ut ac justo vestibulum, ultrices urna et, aliquam nulla.</HPcard>
    </div>
    </>
  )
}

export default Homepage;