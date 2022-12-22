import './Projects.scss'


function ProjectCard({ props }) {
    const { name, description, image } = props

    return (
        <div className='dark'>
            <section className='project-card'>
                <h2 className='latesProj'>{window.location.pathname === "/" ? "</> Latest project" : ""}</h2>
                <div className='project-wrapper'>
                    <div className='info'>
                        <h3>{name}</h3>
                        <div className='short-description'>
                            {description}
                        </div>
                        <button className='btn-1'>Read more</button>
                    </div>
                    <div>
                        <img src={image} alt={`${name} screenshot`} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectCard;