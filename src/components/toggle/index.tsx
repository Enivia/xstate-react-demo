import React from 'react';
import { useMachine } from '@xstate/react';
import toggleMachine from '../../stores/toggle-store';

const Toggle = () => {
  const [current, send] = useMachine(toggleMachine);

  console.log(current);

  return (
    <button onClick={() => send('TOGGLE')}>
      {current.matches('inactive') ? 'Off' : 'On'}
    </button>
  );
};

export default Toggle;
