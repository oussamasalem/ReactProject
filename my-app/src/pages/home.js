
import Header from '../components/header';
import Footer from '../components/footer';
import MainContent from '../components/MainContent';

import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Homee</title>
        </Helmet>
        <Header />
        
        <MainContent PageName="Home" designer="oussama" />
        
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default Home;
