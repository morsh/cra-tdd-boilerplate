import React, { ReactElement } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import { counterReducer } from './counterSlice';
import { AppStore, RootState } from './configureStore';

interface Params {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
  renderOptions?: RenderOptions;
}

function render(ui: ReactElement,
  {
    preloadedState,
    store = configureStore({ reducer: { counter: counterReducer }, preloadedState }),
    ...renderOptions
  }: Params = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };

