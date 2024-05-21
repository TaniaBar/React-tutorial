import React from "react";
import "./Card.css";

const Card = (props) => {
    const country = props.country;

    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return (
        <li className="card">
            <img src={country.flags.png} alt="Drapeau" />
            <div className="data-container">
            <ul>
                <li className="country-name">{country.name.common}</li>
                <li>{country.capital}</li>
                <li>Pop. {numberFormat(country.population)}</li>
            </ul>
            </div>
        </li>
    );
};
  
export default Card;
    
