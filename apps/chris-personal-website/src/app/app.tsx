import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Intro } from './components/Intro';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { ProfessionalPortfolio } from './components/ProfessionalPortfolio';
import { PersonalProjects } from './components/PersonalProjects';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { MobileMenu } from './components/MobileMenu';
import { PopUp } from './common/components/PopUp';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(true);

  const toggle = () => setIsOpen((open) => !open);
  const closePopUp = () => setShowPopUp((shown) => !shown);

  return (
    <>
      <PopUp showPopUp={showPopUp} closePopUp={closePopUp} />
      <NavBar toggle={toggle} />
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Intro />
      <About />
      <PersonalProjects />
      <ProfessionalPortfolio />
      <Skills />
      <Contact />
    </>
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
