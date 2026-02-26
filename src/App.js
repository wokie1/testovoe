import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css"
import HomeSections from './components/HomeSections';
import ModelsSection from './components/ModelsSections';
import NavigationDots from './components/NavigationsDots';
import InfoSections from './components/InfoSections';
import NewsSections from './components/NewsSections';

const sections = [
  { id: 'home',     component: HomeSections     },
  { id: 'models',   component: ModelsSection  },
  { id: 'news',   component: NewsSections  },
  { id: 'info', component: InfoSections }
];

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const scrollToSection = (index) => {
    const target = sectionRefs.current[index];
    if (target) containerRef.current.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(sectionRefs.current.indexOf(entry.target));
        }
      }),
      { root: containerRef.current, threshold: 0.5 }
    );

    sectionRefs.current.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavigationDots
        activeIndex={activeSection}
        totalSections={sections.length}
        onDotClick={scrollToSection}
      />
      <div ref={containerRef} className="app-container">
        {sections.map(({ id, component: Component }, i) => (
          <div key={id} ref={el => sectionRefs.current[i] = el} className="section-wrapper">
            <Component />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;