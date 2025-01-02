// Component
import Layout from '../components/Layout/Layout';

// Style
import '../../assets/styles/Global.scss';
import '../../assets/styles/Fonts.scss';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
