import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Award } from './components/Award';
import { About } from './components/About';
import { Work } from './components/Work';
import { Projects } from './components/Projects';
import { Writing } from './components/Writing';
import { Contact, Footer } from './components/Contact';
import { Resume } from './components/Resume';
import { PostPage, WritingIndex } from './components/WritingPages';

const Home = () => (
  <>
    <TopBar />
    <main>
      <Hero />
      <Award />
      <About />
      <Work />
      <Projects />
      <Writing />
      <Contact />
    </main>
    <Footer />
  </>
);

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/writing' element={<WritingIndex />} />
        <Route path='/writing/:slug' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
