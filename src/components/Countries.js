import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import './Countries.css';

const Countries = () => {
  const [data, setData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);

  useEffect(() => {
    if (playOnce) {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          setData(res.data);
          setPlayOnce(false);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    }
  }, [playOnce]); // Rimuoviamo 'data' dalla lista di dipendenze

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (
          <Card key={country.name.official} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
