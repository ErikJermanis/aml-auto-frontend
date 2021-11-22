import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";

import { db } from "./firebase-config";

const App = () => {
  const carsCollectionRef = collection(db, "cars");

  const [cars, setCars] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getDocs(carsCollectionRef);
      console.log(result.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      setCars(result.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    })();
  }, []);

  return (
    <div className="App">
      {
        cars.length ?
          cars.map(car => (
            <p key={car.id}>{car.name}</p>
          )) :
          <p>loading</p>
      }
    </div>
  );
}

export default App;
