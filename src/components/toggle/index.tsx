import React from 'react';
import { useMachine } from '@xstate/react';
import { toggleMachine } from '../../machine';

const Toggle = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <div>
      <button onClick={() => send('TOGGLE')}>toggle</button>
      <div>
        <strong>toggle times: </strong>
        {state.context.times}
      </div>
      <div>
        <strong>current state: </strong>
        {state.value}
      </div>
    </div>
  );
};

export default Toggle;
