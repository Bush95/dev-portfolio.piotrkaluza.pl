import Container from '@mui/material/Container';
import "../scss/sections/hobbies.scss"
import pkbarista from "../images/pk-hobby-barista.jpg";
import pkphotography from "../images/pk-hobby-photography.jpg";

export default function Hobbies() {
  return (
    <section className="hobbies">
      <Container maxWidth="lg">
        <h2 data-aos="fade" className="text-center heading-underline">My hobbies</h2>

        <div className="hobbies__images">
          <a href="https://piotrkaluza.pl" target="_blank" rel="noreferrer" className="hobbies__item" data-aos="fade-left" data-aos-delay="200">
            <img src={pkphotography} alt="Portrait of Piotr Kałuża" />
          </a>
          <div className="amp">&amp;</div>
          <div className="hobbies__item" data-aos="fade-right" data-aos-delay="200">
            <img src={pkbarista} alt="Portrait of Piotr Kałuża" />
          </div>
        </div>
      </Container>

    </section>
  )
}
