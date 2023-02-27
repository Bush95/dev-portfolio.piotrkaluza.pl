import Container from '@mui/material/Container';
import "../scss/sections/hobbies.scss"
import pkbarista from "../images/pk-hobby-barista.jpg";
import pkphotography from "../images/pk-hobby-photography.jpg";

export default function Hobbies() {
  return (
    <section className="hobbies">
      <Container maxWidth="lg">
        <h2 className="text-center heading-underline">My hobbies</h2>

        <div className="hobbies__images">
          <a href="https://piotrkaluza.pl" target="_blank" rel="noreferrer" className="hobbies__item">
            <img src={pkphotography} alt="Portrait of Piotr Kałuża" />
          </a>
          <div className="amp">&amp;</div>
          <div className="hobbies__item">
            <img src={pkbarista} alt="Portrait of Piotr Kałuża" />
          </div>
        </div>
      </Container>

    </section>
  )
}