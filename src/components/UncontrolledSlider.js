import React, { forwardRef, useRef } from 'react';

const UncontrolledSlider = forwardRef(({
  name,
  id = name,
  min = 0,
  max = 100,
  step = 1,
  setter,
  defaultValue = 50,
  ...otherProps
}, ref) => {

  const animationFrame = useRef(null)

  function changeHandler(event) {
    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current)
    }
    event.persist()
    animationFrame.current = requestAnimationFrame(() => {
      setter(event.target.value);
    })
  }

  return (
    <div {...otherProps}>
      <input
        type="range"
        name={name}
        id={id}
        min={min}
        max={max}
        step={step}
        onChange={changeHandler}
        defaultValue={defaultValue}
        ref={ref}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
})

export default UncontrolledSlider
