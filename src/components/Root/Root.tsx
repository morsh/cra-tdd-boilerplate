import React, { Suspense } from 'react';
import App from '../App/App';
import { store } from '../../store/configureStore';
import { Provider } from 'react-redux';
import { init18n } from '../../i18n/i18n';
import { getDIRFromLocale } from '../../i18n/rtl';
import { Helmet } from 'react-helmet';
import './Root.css';

function getLocaleFromUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('locale') || 'en';
}
const locale = getLocaleFromUrlParams();
init18n(locale).catch(console.error);

export const Root = () => {
  return (
    <Provider store={store}>
      <Helmet htmlAttributes={{ lang: locale, dir: getDIRFromLocale(locale) }} />
      <Suspense data-hook='app-fallback' fallback={'Loading...'}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Suspense>
    </Provider>
  );
};
