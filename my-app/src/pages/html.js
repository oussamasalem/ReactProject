
import Header from '../components/header';
import Footer from '../components/footer';
import MainContent from '../components/MainContent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Html = () => {
  return (
    <div className='Html'>

      <HelmetProvider>
          <Helmet>
            <title>HTML</title>
          </Helmet>
        
          <Header />
        
          <MainContent PageName="Html" designer="oussama "/>
        
          <Footer />
      </HelmetProvider>


    </div>
  );
}

export default Html;
