import './scss/common.scss';
import Banner from './sections/banner';
import Footer from './sections/footer';
import Hobbies from './sections/hobbies';
import Projects from './sections/projects';
import Stack from './sections/stack';

function App() {
  return (
    <div className="App">
      <Banner />
      <Stack />
      <Projects />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
