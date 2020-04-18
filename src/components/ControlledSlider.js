import React, { useCallback } from 'react';
import _ from 'lodash'

const ControlledSlider = ({
  name,
  id = name,
  min = 0,
  max = 100,
  step = 1,
  setter,
  value = 50,
  ...otherProps
}) => {

  return (
    <div {...otherProps}>
      <input
        type="range"
        name={name}
        id={id}
        min={min}
        max={max}
        step={step}
        onChange={e => { setter(e.target.value) }}
        value={value}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default ControlledSlider
