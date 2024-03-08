//components:


function Project({title, description, id, image, gitHub, deployedUrl, styling}) {
    return (
        <div className="card cardSize">
            <div className={`card-img-top project ${styling}`} ></div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{id}</h6>
                <p className="card-text">{description}</p>
                <a href={gitHub} className="card-link" target="_blank">gitHub</a>
                <a href={deployedUrl} className="card-link" target="_blank">deployedUrl</a>
            </div>
        </div>
    );
}
export default Project