// Component
import Layout from '../components/Layout/Layout';

// Style
import '../assets/styles/Global.scss';
import '../assets/styles/Fonts.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
