/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('../index.html');
}

console.log('webpack starterkit');
