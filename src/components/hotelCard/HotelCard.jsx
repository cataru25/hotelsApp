import React from 'react';

function HotelCard({name,
    availabilityFrom,
    availabilityTo,
    description,
    city,
    country,
    rooms,
    price
}) {

    return (
        <div>
            <img src="../../images/alto-atacama.jpg" alt="Hotel Alto Atacama" />
            {name && <h2>{name}</h2>}
            {availabilityFrom && <p>{availabilityFrom}</p>}
            {availabilityTo && <p>{availabilityTo}</p>}
            {description && <p>{description}</p>}
            {city && <p>{city}</p>}
            {country && <p>{country}</p>}
            {rooms && <p>{rooms}</p>}
            {price && <p>{price}</p>}
            <button>Reservar</button>
        </div>
    )
}

export default HotelCard
