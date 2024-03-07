//components:
//components:
// import React from "react";
import Project from "../components/project";
import projects from "../utils/projectGallery.json";

// const projects = require("/src/pages/projectGallery.json")

function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery</h1>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 col-sm-12 mb-4" key={index}>
            <Project
            title={project.title}
            image={project.image}
            id={project.id}
            gitHub={project.gitHub}
            description={project.description}
            deployedUrl={project.deployedUrl}
              />

          </div>
        ))} 

      </div>
    </div>
  );
}
export default ProjectGallery;

// import React from "react"
// import projects from "./projectGallery.json"

// // const projects = require("/src/pages/projectGallery.json")

// function ProjectGallery(){
//    const projectListItems = projects.map(project=>
//    <li>
//     <div className="card">
//         <h5>{project.title}</h5>
//         </div>
//     </li>)
// }
// export default ProjectGallery
