import { ControlledSlider } from 'mysterybear-react-components';
import React, { useState, useCallback } from 'react';
import _ from 'lodash'


const App = () => {

  const [value, setValue] = useState(50)

  const setter = useCallback(_.throttle(v => setValue(v)), [])

  return (
    <>
      <pre>{value}</pre>
      <ControlledSlider
        name="someValue"
        value={value}
        wait={500}
        setter={setter}
      />
      <button onClick={() => { setValue(75) }}>75</button>
    </>
  )
}

export default App
