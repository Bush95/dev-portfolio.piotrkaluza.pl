import pkportrait from "../images/pk-portrait.jpg";
import Container from '@mui/material/Container'; 
import Grid from '@mui/material/Unstable_Grid2'; 
import "../scss/sections/about.scss";

export default function About() {
  return (
    <section className="about">
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid md={6} lg={5}>
            <div className="about__content" data-aos="fade-in">
              <h2 className="heading-underline">Hi! I'm Piotr.</h2>
              <p>I'm a Front-End developer from Poland</p>
              <p>My developer jurney started at 2016. Back then I was learning by myself to get my first job as a Front-End developer.</p>
              <p>At the end of 2016 I started working as a Wordpress developer for a <a href="https://giantpeach.agency/" rel="nofollow noreferrer" target="_blank" title="giantpeach.agency website">digital agency</a> based in the UK. My main task was to build websites and woocommerce stores from scrath on the Wordpress platform.</p>
              <p>Later I started working as a Front End Magento 2 developer, at <a href="https://orangeskyab.com/" rel="nofollow noreferrer" target="_blank" title="orangeskyab.com website">OrangeSky Ab</a>. My task was to work on the visual side of 3 e-commerce stores.</p>
              <p>Now I am looking for new opportunities to work with the latest front-end trends.</p>
            </div>
          </Grid>
          <Grid md={5} lg={6}>
            <div className="about__img" data-aos="fade-left">
              <img src={pkportrait} alt="Portrait of Piotr Kałuża" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

