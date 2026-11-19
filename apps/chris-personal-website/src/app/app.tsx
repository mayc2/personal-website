import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Intro } from './components/Intro';
import { SiteHeader } from './components/SiteHeader';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { PersonalProjects } from './components/PersonalProjects';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { PopUp } from './common/components/PopUp';

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const closePopUp = () => setShowPopUp((shown) => !shown);

  return (
    <div id='top'>
      <PopUp showPopUp={showPopUp} closePopUp={closePopUp} />
      <SiteHeader />
      <Intro />
      <About />
      <PersonalProjects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
