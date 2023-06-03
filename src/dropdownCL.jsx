import React, { useState } from 'react';
import ladamx from './ladamx.json';


const DropdownCL= (props) => {


  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setcolaboradorSCL.lada(ladamx[country]);
    
  };

  return (
    <div>
      <select value={props.value} onChange={props.onChange} name={props.name}>
        <option value="">Seleccione un estado</option>
        {Object.keys(ladamx).map((countryCode) => (
          <option key={countryCode} value={countryCode}>
            {countryCode}
          </option>
        ))}
      </select>
  
    </div>
  );
};

export default DropdownCL;
