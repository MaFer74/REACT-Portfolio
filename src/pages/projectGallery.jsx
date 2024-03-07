//components:
//components:
import React from "react"
import projects from "./projectGallery.json"


// const projects = require("/src/pages/projectGallery.json")

function ProjectGallery() {
    
    return (
        <section id="projectSection">
        {projects.map(project => {
           return <>
           <li>
                <div className="card">
                    <h5>{project.title}</h5>
                </div>
            </li>
           </>
        })}
        </section>
    )

}
export default ProjectGallery






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
