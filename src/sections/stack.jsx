import "../scss/sections/stack.scss"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import "../scss/sections/about.scss";

export default function Stack() {
  return (
    <section className="stack">
      <Container>
        <div className="stack__container">
          <h2 className="heading-underline text-center heading-margin">Web stack</h2>

          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center">
            <Grid lg={6}>
              <h3>Core technologies: </h3>
              <p>HTML, CSS, JS, PHP</p>
            </Grid>
            <Grid lg={6}>
              <h3>Libraries:</h3>
              <p>jQuery, ReactJS (Currently learning)</p>
            </Grid>
            <Grid md={6}>
              <h3>Platforms:</h3>
              <p>Wordpress and Woocommerce, Magento 1 &amp; 2, Symfony </p>
            </Grid>
            <Grid md={6}>
              <h3>Tools:</h3>
              <p>Webpack, Gulp, Git/Bitbucket, Github, Jira, Bootstrap grid, UI kit, Adobe Photoshop, Adobe Lightroom, Adobe XD</p>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  )
}

