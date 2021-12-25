import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BookACar = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get('car'));
  }, []);

  return (
    <div className="pt-16">
      Book a car
    </div>
  )
}

export default BookACar;