import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';

const Home = () => (
  <>
    <TopBar />
    <main>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  </>
);

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
