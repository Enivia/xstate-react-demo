import React from 'react';
import { useMachine } from '@xstate/react';
import { counterMachine } from '../../machine';

const Counter = () => {
  const [state, send] = useMachine(counterMachine);

  return (
    <div>
      <button onClick={() => send('INCREASE')}>increase</button>
      <button onClick={() => send('DECREASE')}>decrease</button>
      <div>
        <strong>count: </strong>
        {state.context.count}
      </div>
    </div>
  );
};

export default Counter;
