const Card = (props) => {
    const { name, capital } = props.country;

    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h3>{name}</h3>
            <p>Capital: {capital}</p>
        </div>
    );
};

export default Card;