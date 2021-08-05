import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Intro } from './components/Intro';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { ProfessionalPortfolio } from './components/ProfessionalPortfolio';
import { PersonalProjects } from './components/PersonalProjects';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Resume } from './components/Resume';

// type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';

export function App() {
  // Event Listeners

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
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
