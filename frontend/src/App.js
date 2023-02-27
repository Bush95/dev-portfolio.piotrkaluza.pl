import './scss/common.scss';
import About from './sections/about';
import Banner from './sections/banner';
import Footer from './sections/footer';
import Hobbies from './sections/hobbies';
import Projects from './sections/projects';
import Stack from './sections/stack';

function App() {
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
