import { Link } from 'react-router-dom';
import './Projects.scss'
const slugify = require('slugify')


function ProjectCard({ props }) {
    const { name, introduction, image, deployment, contributor } = props.proj;
    const isOdd = props.isOdd;
    const onHomepage = (window.location.pathname === "/")
    const slug = slugify(name)

    return (
        <div className='dark'>
            <section className='project-card'>
                <h2 className='latesProj'>{onHomepage ? "</> Latest project" : ""}</h2>
                <div className={`project-wrapper ${isOdd ? '' : 'even'}`}>
                    <div className='info'>
                        {onHomepage ? <h3>{name}</h3> : <h3>{`< ${name} />`}</h3>}
                        <div className='short-description'>
                            {introduction}
                            {contributor ?
                                <div className='collab'>
                                    <h4>Contributor:</h4>
                                    <a href={contributor.github} target="_blank" rel="noreferrer">{contributor.name}</a>
                                </div>
                                : ""}
                        </div>
                        {window.location.pathname === `/projects/${slug}` ?
                            <a href={deployment} target="_blank" rel="noreferrer"><button className='btn-1'>See deployment</button></a> :
                            <Link to={`/projects/${slug}`}><button className='btn-1'>Read more</button></Link>}
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