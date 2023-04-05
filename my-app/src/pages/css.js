
import Header from '../components/header';
import Footer from '../components/footer';
import MainContent from '../components/MainContent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Css = () => {
  return (
    <div className='css'>
      <HelmetProvider>
        <Helmet>
            <title>css</title>
        </Helmet>

        <Header />
        
        <MainContent PageName="Css" designer="salem" />
        
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default Css;
