import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import InputGroup from "../../components/inputGroup";
import InputSelect from "../../components/inputSelect";
import Button from "../../components/button";

const FormRow = ({ label, children }) => (
  <div className="flex items-center justify-evenly border-b border-gray-400 py-3">
    <p className="w-5/12 font-semibold text-gray-700 text-lg">{label}</p>
    {children}
  </div>
);

const EditCar = () => {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    console.log(id);
  }, []);

  return (
    <>
    <h2 className="font-bold text-2xl m-8">Edit car - {id}</h2>
    <form className="w-1/2 m-auto flex flex-col">
      <FormRow label="Name">
        <InputGroup className="w-1/2" />
      </FormRow>
      <FormRow label="Brand">
        <InputGroup className="w-1/2" />
      </FormRow>
      <FormRow label="Body type">
        <InputSelect className="w-1/2" />
      </FormRow>
      <FormRow label="Engine type">
        <InputGroup className="w-1/2" />
      </FormRow>
      <FormRow label="Engine power">
        <InputGroup className="w-1/2" />
      </FormRow>
      <FormRow label="Number of doors">
        <InputGroup className="w-1/2" />
      </FormRow>
      <FormRow label="Number of seats">
        <InputGroup className="w-1/2" />
      </FormRow>
      <FormRow label="Transmission">
        <InputGroup className="w-1/2" />
      </FormRow>
      {/* TODO: Add additional features <multi select> */}
      <FormRow label="Image">
        <InputGroup className="w-1/2" />
      </FormRow>
      <FormRow label="Price (€)">
        <InputGroup className="w-1/2" />
      </FormRow>
      <div className="flex justify-end mt-4">
        <Button secondary className="">Cancel</Button>
        <Button primary className="w-28 mx-4">Save</Button>
      </div>
    </form>
    </>
  )
}

export default EditCar;
