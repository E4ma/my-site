import React, { useState, useEffect } from 'react';
// import HeroNav from './Navbar/HeroNav';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [heronav, setHeronav] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    // setHeronav({ ...navData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("app");
    return function cleanup() {
      document.body.classList.remove("app");
    };
  });

  return (
    <PortfolioProvider value={{ heronav, hero, about, projects, contact, footer }}>
      {/* <HeroNav /> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
