import { Machine, assign } from 'xstate';

export const toggleMachine = Machine<{ times: number }, { type: 'TOGGLE' }>({
  id: 'toggle',
  initial: 'active',
  context: { times: 0 },
  states: {
    active: {
      on: {
        TOGGLE: {
          actions: assign({ times: (ctx) => ctx.times + 1 }),
          target: 'inactive',
        },
      },
    },
    inactive: {
      on: {
        TOGGLE: {
          actions: assign({ times: (ctx) => ctx.times + 1 }),
          target: 'active',
        },
      },
    },
  },
});

export const counterMachine = Machine<
  { count: number },
  { type: 'INCREASE' | 'DECREASE' }
>({
  id: 'counter',
  initial: 'active',
  context: { count: 0 },
  states: {
    active: {
      on: {
        INCREASE: { actions: assign({ count: (ctx) => ctx.count + 1 }) },
        DECREASE: { actions: assign({ count: (ctx) => ctx.count - 1 }) },
      },
    },
  },
});
