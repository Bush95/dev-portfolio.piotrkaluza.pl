import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import "../scss/sections/hobbies.scss"

export default function Hobbies() {
  return (
    <section className="hobbies">
      <Container maxWidth="lg">
        <h2 className="text-center heading-underline">My hobbies</h2>

        <Grid container spacing={4} justifyContent="center">
          <Grid item md={6}>
            <h2>Kawa</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto repellat aliquam culpa provident quisquam sapiente possimus dolore nihil laudantium!</p>
          </Grid>
          <Grid item md={6}>
            <h2>Zdjencia</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto repellat aliquam culpa provident quisquam sapiente possimus dolore nihil laudantium!</p>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
