//components:

import mfImage from "../images/MF.jpeg"

function Home(){
    return (
      <section className="my-5 mx-5">
      <div className="card mb-3">
        <div className="row g-2">
          <div className="col-md-4">
            <img
              src={mfImage}
              className="img-fluid rounded-start home-image"
              alt="..."
            />
          </div>
          <div className="col-md-6">
          
            <div className="card-body">
            <br /> 
              <h1 id="About" className="card-title bi-border-style">About Me</h1>
              <br /> 
              <br /> 
              <p className="card-text">"Over the past 20 years I lived in countries like Iraq, Egypt, Pakistan, Thailand and UK among others, these experiences have enriched me greatly, and taught me how to reinvent myself in unconventional ways. From Telecom to M&E, from Business Development to Special Education/Autism, my background is a statement of adaptation to different areas of work. 
           Now, I am starting a new and exciting new chapter in the FrontEnd field, where I hope I would be able to combine my new skills, with my creativity an expertise to excel in new frontiers ..stay tune for more!"</p>
           <br /> 
                <medium className="text-muted">Fernanda Lujan</medium>
                <div></div>
                <br /> 
                <br /> 
                <br /> 
                <br /> 
              <a href="https://drive.google.com/file/d/1bYgAYQlYzgsday51N7wequ3PldWrwF-G/view?usp=sharing" 
              target="_blank"  className="btn btn-primary">Look at my CV</a>
            </div>
          </div>
        </div>
      </div>  

        </section>
    )
}
export default Home



