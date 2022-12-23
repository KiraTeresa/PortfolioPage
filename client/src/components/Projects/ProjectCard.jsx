import { Link } from 'react-router-dom';
import './Projects.scss'
const slugify = require('slugify')


function ProjectCard({ props }) {
    const { name, introduction, image, deployment } = props.proj;
    const isOdd = props.isOdd;
    const slug = slugify(name)

    return (
        <div className='dark'>
            <section className={`project-card `}>
                <h2 className='latesProj'>{window.location.pathname === "/" ? "</> Latest project" : ""}</h2>
                <div className={`project-wrapper ${isOdd ? '' : 'even'}`}>
                    <div className='info'>
                        <h3>{name}</h3>
                        <div className='short-description'>
                            {introduction}
                        </div>
                        {window.location.pathname === `/projects/${slug}` ?
                            <a href={deployment}><button className='btn-1'>See deployment</button></a> :
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