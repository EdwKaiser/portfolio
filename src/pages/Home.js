import '../assets/Home.scss'
import React, { useState } from 'react';
import Header from '../components/Header'

import Footer from '../components/Footer'
import About from '../components/About'
import Project  from '../components/Project'
import Separator from '../components/Separator'
import Services  from '../components/Services'
import Cv from '../components/Cv'





function Home() {
  const [section, setSection] = useState('presentation');

  const afficherContenu = (section) => {
    console.log(section);
    setSection(section);
  };

  return (
    <div className='home'>
      <Header afficherContenu={afficherContenu}/>    
      <main id='main'>  
        <Separator />
        <div className={`section ${section === 'presentation' ? '' : 'hidden'}`}>
          {section === 'presentation' && <About />}
        </div>
        <div className={`section ${section === 'project' ? '' : 'hidden'}`}>
          {section === 'project' && <Project />}
        </div>
        <div className={`section ${section === 'services' ? '' : 'hidden'}`}>
          {section === 'services' && <Services />}
        </div>
        <div className={`section ${section === 'CV' ? '' : 'hidden'}`}>
          {section === 'CV' && <Cv />}
        </div>
      </main>
      <Separator />
      <Footer />
    </div>
  );
}

export default Home;
