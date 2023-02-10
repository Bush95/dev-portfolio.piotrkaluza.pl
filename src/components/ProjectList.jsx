import Project from './Project'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; 

function ProjectList({items}) {
    const listElements = Object.keys(items).map(key => {
        return (
            <Grid item sm={10} md={6} key={key}>
                <Project data={items[key]} />
            </Grid>
        )
    });

    return (
        <div className="item-list" style={{display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center"}}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {listElements}
                </Grid>
            </Container>
        </div>
    )
}

export default ProjectList;