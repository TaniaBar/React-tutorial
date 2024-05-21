import { useState } from "react";
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([
        { name: "Italy", capital: "Rome" },
        { name: "France", capital: "Paris" },
        { name: "Spain", capital: "Madrid" }
    ]);

    return (
        <div>
            {data.map((country, index) => (
                <Card key={index} country={country} />
            ))}
        </div>
    );
};

export default Countries;