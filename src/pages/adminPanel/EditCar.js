import { useEffect, useRef, useState, useCallback, memo } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../../contexts/AuthContext";

import InputGroup from "../../components/inputGroup";
import InputSelect from "../../components/inputSelect";
import Button from "../../components/button";

const bodyTypeOptions = [
  { value: "sedan", label: "sedan" },
  { value: "hatchback", label: "hatchback" },
  { value: "coupe", label: "coupe" },
  { value: "convertible", label: "convertible" },
  { value: "sport-utility vehicle (suv)", label: "sport-utility vehicle (suv)" },
  { value: "sports car", label: "sports car" },
  { value: "station wagon", label: "station wagon" },
  { value: "minivan", label: "minivan" },
  { value: "pickup truck", label: "pickup truck" }
];

const FormRow = memo(({ label, children }) => (
  <div className="flex items-center justify-evenly border-b border-gray-400 py-3">
    <p className="w-5/12 font-semibold text-gray-700 text-lg">{label}</p>
    {children}
  </div>
));

const EditCar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const nameRef = useRef();
  const brandRef = useRef();
  const bodyTypeRef = useRef();
  const engineTypeRef = useRef();
  const enginePowerRef = useRef();
  const numberOfDoorsRef = useRef();
  const numberOfSeatsRef = useRef();
  const transmissionRef = useRef();
  const additionalFeaturesRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();

  const { userToken } = useAuth();

  const [nameInvalid, setNameInvalid] = useState(null);
  const [brandInvalid, setBrandInvalid] = useState(null);
  const [bodyTypeInvalid, setBodyTypeInvalid] = useState(null);
  const [engineTypeInvalid, setEngineTypeInvalid] = useState(null);
  const [enginePowerInvalid, setEnginePowerInvalid] = useState(null);
  const [numberOfDoorsInvalid, setNumberOfDoorsInvalid] = useState(null);
  const [numberOfSeatsInvalid, setNumberOfSeatsInvalid] = useState(null);
  const [transmissionInvalid, setTransmissionInvalid] = useState(null);
  const [imageInvalid, setImageInvalid] = useState(null);
  const [priceInvalid, setPriceInvalid] = useState(null);

  const fillData = data => {
    const { name, brand, bodyType, engineType, enginePower, numberOfDoors, numberOfSeats, transmission, additionalFeatures, image, price } = data;
    nameRef.current.value = name;
    brandRef.current.value = brand;
    bodyTypeRef.current.setValue({ value: bodyType, label: bodyType });
    engineTypeRef.current.value = engineType;
    enginePowerRef.current.value = enginePower;
    numberOfDoorsRef.current.value = numberOfDoors;
    numberOfSeatsRef.current.value = numberOfSeats;
    transmissionRef.current.value = transmission;
    additionalFeaturesRef.current.value = additionalFeatures;
    imageRef.current.value = image;
    priceRef.current.value = price;
  };

  useEffect(() => {
    if(id) {
      if(location.state) {
        fillData(location.state);
      } else {
        (async () => {
          try {
            const result = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/cars/${id}`, {
              headers: {
                Authorization: `Bearer ${userToken}`
              }
            });
            fillData(result.data);
          } catch(error) {
            console.log(error);
          }
        })();
      }
    }
  }, [id, location.state, userToken]);

  const onSubmit = async e => {
    e.preventDefault();

    let allValid = true;
    if(!nameRef.current.value) {
      setNameInvalid("Name is required");
      allValid = false;
    }
    if(!brandRef.current.value) {
      setBrandInvalid("Brand is required");
      allValid = false;
    }
    if(!bodyTypeRef.current.value) {
      setBodyTypeInvalid("Body type is required");
      allValid = false;
    }
    if(!engineTypeRef.current.value) {
      setEngineTypeInvalid("Engine type is required");
      allValid = false;
    }
    if(!enginePowerRef.current.value) {
      setEnginePowerInvalid("Engine power is required");
      allValid = false;
    }
    if(!numberOfDoorsRef.current.value) {
      setNumberOfDoorsInvalid("Number of doors is required");
      allValid = false;
    }
    if(!numberOfSeatsRef.current.value) {
      setNumberOfSeatsInvalid("Number of seats is required");
      allValid = false;
    }
    if(!transmissionRef.current.value) {
      setTransmissionInvalid("Transmission is required");
      allValid = false;
    }
    if(!imageRef.current.value) {
      setImageInvalid("Image is required");
      allValid = false;
    }
    if(!priceRef.current.value) {
      setPriceInvalid("Price is required");
      allValid = false;
    }
    if(!allValid) return;

    const body = {
      name: nameRef.current.value,
      brand: brandRef.current.value,
      bodyType: bodyTypeRef.current.props.value.value,
      engineType: engineTypeRef.current.value,
      enginePower: enginePowerRef.current.value,
      numberOfDoors: numberOfDoorsRef.current.value,
      numberOfSeats: numberOfSeatsRef.current.value,
      transmission: transmissionRef.current.value,
      additionalFeatures: additionalFeaturesRef.current.value.length ? additionalFeaturesRef.current.value.split(',') : [],
      image: imageRef.current.value,
      price: priceRef.current.value
    }

    if(id) {
      await axios.put(`${process.env.REACT_APP_API_DOMAIN}/cars/${id}`, body, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });
      navigate("/admin/cars");
    } else {
      await axios.post(`${process.env.REACT_APP_API_DOMAIN}/cars`, body, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });
      navigate("/admin/cars");
    }
  };

  const validateName = useCallback(() => setNameInvalid(null), []);
  const validateBrand = useCallback(() => setBrandInvalid(null), []);
  const validateBodyType = useCallback(() => setBodyTypeInvalid(null), []);
  const validateEngineType = useCallback(() => setEngineTypeInvalid(null), []);
  const validateEnginePower = useCallback(() => setEnginePowerInvalid(null), []);
  const validateNumberOfDoors = useCallback(() => setNumberOfDoorsInvalid(null), []);
  const validateNumberOfSeats = useCallback(() => setNumberOfSeatsInvalid(null), []);
  const validateTransmission = useCallback(() => setTransmissionInvalid(null), []);
  const validateImage = useCallback(() => setImageInvalid(null), []);
  const validatePrice = useCallback(() => setPriceInvalid(null), []);

  return (
    <>
    <h2 className="font-bold text-2xl m-8">{!id ? 'Create new car' : `Edit car - ${id}`}</h2>
    <form onSubmit={onSubmit} className="w-1/2 m-auto flex flex-col">
      <FormRow label="Name">
        <InputGroup className="w-1/2" ref={nameRef} invalid={nameInvalid} onChange={validateName} />
      </FormRow>
      <FormRow label="Brand">
        <InputGroup className="w-1/2" ref={brandRef} invalid={brandInvalid} onChange={validateBrand} />
      </FormRow>
      <FormRow label="Body type">
        <InputSelect className="w-1/2" options={bodyTypeOptions} ref={bodyTypeRef}  invalid={bodyTypeInvalid} onChange={validateBodyType} />
      </FormRow>
      <FormRow label="Engine type">
        <InputGroup className="w-1/2" ref={engineTypeRef} invalid={engineTypeInvalid} onChange={validateEngineType} />
      </FormRow>
      <FormRow label="Engine power">
        <InputGroup className="w-1/2" ref={enginePowerRef} invalid={enginePowerInvalid} onChange={validateEnginePower} />
      </FormRow>
      <FormRow label="Number of doors">
        <InputGroup className="w-1/2" ref={numberOfDoorsRef} invalid={numberOfDoorsInvalid} onChange={validateNumberOfDoors} />
      </FormRow>
      <FormRow label="Number of seats">
        <InputGroup className="w-1/2" ref={numberOfSeatsRef} invalid={numberOfSeatsInvalid} onChange={validateNumberOfSeats} />
      </FormRow>
      <FormRow label="Transmission">
        <InputGroup className="w-1/2" ref={transmissionRef} invalid={transmissionInvalid} onChange={validateTransmission} />
      </FormRow>
      <FormRow label="Additional features">
        <InputGroup className="w-1/2" ref={additionalFeaturesRef} />
      </FormRow>
      <FormRow label="Image">
        <InputGroup className="w-1/2" ref={imageRef} invalid={imageInvalid} onChange={validateImage} />
      </FormRow>
      <FormRow label="Price (€)">
        <InputGroup className="w-1/2" ref={priceRef} invalid={priceInvalid} onChange={validatePrice} />
      </FormRow>
      <div className="flex justify-end mt-4">
        <Link to="/admin/cars"><Button type="button" secondary className="">Cancel</Button></Link>
        <Button type="submit" primary className="w-28 mx-4">Save</Button>
      </div>
    </form>
    </>
  )
}

export default EditCar;
