import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, getCount } from '../../store/counterSlice';
import type { AppDispatch } from '../../store/configureStore';

export function Counter() {
  const count = useSelector(getCount);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>
        <button data-hook='counter-inc' onClick={() => dispatch(increment())}>Increment</button>
        <span data-hook='counter-value'>{count}</span>
        <button data-hook='counter-dec' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

