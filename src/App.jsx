import React, {useRef, useEffect} from 'react';
import styles from './style';
import {Navbar, Hero, Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients, CTA, Footer } from './components';
import Portfolio from './components/Portfolio';
import TagManager from 'react-gtm-module';

const App = () => {
  useEffect(() => {
    const tagManagerArgs = {
        gtmId: 'G-T5L4MELZ8T'
    };
    TagManager.initialize(tagManagerArgs);
}, []);

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>


      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          <Business />
          <Billing />
          <CardDeal />
          {/* <Testimonials /> */}
          {/* <Clients /> */}
          {/* <CTA /> */}
          <Portfolio/>
          <Footer />
        </div>
      </div>
    </div>
);
}

export default App