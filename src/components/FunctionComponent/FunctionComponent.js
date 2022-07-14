import React, { useState } from 'react';

import { Button } from '../Button/Button';

export const FunctionComponent = () => {
  let [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter(counter + 1);
    // counter = counter + 1;
    // console.log(counter);
  };

  return (
    <div>
      <h1>FunctionComponent</h1>
      <p>{counter}</p>
      {/* <button onClick={onIncrement}>Increment</button> */}
      <Button onClickProp={onIncrement}>Increment</Button>
    </div>
  );
};
