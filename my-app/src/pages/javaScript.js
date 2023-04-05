
import Header from '../components/header';
import Footer from '../components/footer';
import MainContent from '../components/MainContent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const JavaScript = () => {
  return (
    <div className='javascript'>
      <HelmetProvider>
        <Helmet>
          <title>js</title>
        </Helmet>



        <Header />

        <MainContent PageName="JavaScript" designer="salem" />

        
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default JavaScript;
