import './scss/common.scss';
import About from './sections/about';
import Banner from './sections/banner';
import Footer from './sections/footer';
import Hobbies from './sections/hobbies';
import Projects from './sections/projects';
import Stack from './sections/stack';
import AOS from 'aos';

function App() {
  AOS.init({ once: true, delay: 100, duration: 600});

  return (
    <div className="App">
      <Banner />
      <About />
      <Stack />
      <Projects />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
