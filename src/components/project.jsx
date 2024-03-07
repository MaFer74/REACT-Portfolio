//components:


function Project({title, description, id, image, gitHub, deployedUrl}) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{id}</h6>
                <p className="card-text">{description}</p>
                <a href={gitHub} className="card-link">gitHub</a>
                <a href={deployedUrl} className="card-link">deployedUrl</a>
            </div>
        </div>
    );
}
export default Project