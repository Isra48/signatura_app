import React, { useState } from 'react';
import Ci from './ci.json';


const DropdownCi= (props) => {


  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setcolaboradorSCL.clave(Ci[country]);
  };

  return (
    <div>
      <select value={props.value} onChange={props.onChange} name={props.name}>
        <option value="">Seleccione un país</option>
        {Object.keys(Ci).map((countryCode) => (
          <option key={countryCode} value={countryCode}>
            {countryCode}
          </option>
        ))}
      </select>
    
    </div>
  );
};

export default DropdownCi;
