import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import { init18n } from './i18n/i18n';
import { getDIRFromLocale } from './i18n/rtl';
import { Helmet } from 'react-helmet';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function getLocaleFromUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('locale') || 'en';
}
const locale = getLocaleFromUrlParams();
init18n(locale).catch(console.error);

const Root = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Suspense fallback={'Loading...'}>
          <Helmet htmlAttributes={{ lang: locale, dir: getDIRFromLocale(locale) }} />
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
