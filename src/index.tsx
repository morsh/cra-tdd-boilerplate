import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import { init18n } from './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function loadI18nByUrlLocale() {
  const urlParams = new URLSearchParams(window.location.search);
  const locale = urlParams.get('locale') || 'en';
  init18n(locale);
}
loadI18nByUrlLocale();

const Root = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Suspense fallback={'Loading...'}>
          <App />
        </Suspense>
      </React.StrictMode>
    </Provider>
  );
};

root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
