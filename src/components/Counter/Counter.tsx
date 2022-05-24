import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, getCount, incrementByAmount } from '../../store/counterSlice';
import type { AppDispatch } from '../../store/configureStore';
import { useTranslation } from 'react-i18next';

export function Counter() {
  const count = useSelector(getCount);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  return (
    <div data-hook='counter-page'>
      <button data-hook='counter-inc' onClick={() => dispatch(increment())}>{t('pages.counter.increment')}</button>
      <span data-hook='counter-value'>{count}</span>
      <button data-hook='counter-dec' onClick={() => dispatch(decrement())}>{t('pages.counter.decrement')}</button>
      <button data-hook='counter-inc2' onClick={() => dispatch(incrementByAmount(2))}>{t('pages.counter.increase2')}</button>
    </div>
  );
}

