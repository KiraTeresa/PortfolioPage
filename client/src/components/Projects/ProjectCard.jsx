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
                <div className='info'>
                    <h3>{name}</h3>
                    <div>
                        {description}
                    </div>
                    <button>Read more</button>
                </div>
                <div>
                    {image}
                </div>
            </section>
        </div>
    )
}

export default ProjectCard;