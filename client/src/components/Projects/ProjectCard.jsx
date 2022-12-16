import { useEffect, useState } from 'react';
import './Projects.scss'
import apiClient from '../../services/apiClient';

function ProjectCard() {
    const [isLoading, setIsLoading] = useState(true)
    const [latestProject, setLatestProject] = useState({})

    useEffect(() => {
        apiClient.get("/projects/latest").then(result => {
            console.log(result);
            setLatestProject(result.data)
        }).catch(err => console.log("Error: ", err)).finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <div>Loading....</div>
    }

    const { name, description, image } = latestProject

    return (
        <div className='dark'>
            <section className='project-card'>
                <h2>{window.location.pathname === "/" ? "</> Latest project" : ""}</h2>
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