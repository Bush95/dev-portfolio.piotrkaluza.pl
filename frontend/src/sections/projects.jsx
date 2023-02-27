import ProjectList from "../components/ProjectList"
import Data from "../misc/projects-data.json"
import "../scss/sections/projects.scss"

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="heading-underline text-center heading-margin">Portfolio</h2>
      <div className="text-center projects__text" data-aos="fade">
        <p>In the last 6 years of my commercial work I have created many projects. Here are a few of them</p>
      </div>
      <div data-aos="fade-up">
        <ProjectList items={Data}/>
      </div>
    </section>
  )
}
