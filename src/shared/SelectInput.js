import React from 'react';


const SelectInput = props => (
  <select
    className="form-select"
    onChange={e => props.onChange(e.target.value)}
  >
    <option value="">{props.placeholder}</option>
    {props.options.map(opt => (
      <option
        key={opt.value}
        value={opt.value}
      >{opt.label}</option>
  				))}
  </select>
);

export default SelectInput;
