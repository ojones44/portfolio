import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import messages from './messages';

import LOCALES from './locales';

function Provider({ children, locale = LOCALES.ENGLISH }) {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
}

export default Provider;
