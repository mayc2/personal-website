import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Intro } from './components/Intro';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { ProfessionalPortfolio } from './components/ProfessionalPortfolio';
import { PersonalProjects } from './components/PersonalProjects';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { MobileMenu } from './components/MobileMenu';
import { useState } from 'react';
import { PopUp } from './common/components/PopUp';

// type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';

export function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <PopUp />
          <NavBar toggle={toggle}/>
          <MobileMenu isOpen={isOpen} toggle={toggle}/>
          <Intro />
          <About />
          <Skills />
          <PersonalProjects />
          <ProfessionalPortfolio />
          <Contact />
        </Route>
        <Route path="/resume" exact>
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
