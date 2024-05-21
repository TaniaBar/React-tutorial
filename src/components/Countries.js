import axios from 'axios';
import { useEffect, useState } from 'react';

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
          <li key={country.cca3}>{country.name.official}</li> // Aggiungiamo la chiave per ogni elemento
        ))}
      </ul>
    </div>
  );
};

export default Countries;
