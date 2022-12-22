import { useEffect, useState } from "react";
import ProjectCard from "../../components/Projects/ProjectCard";
import apiClient from "../../services/apiClient";

function ProjectsPage() {
    const [dark, setDark] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        apiClient.get('/projects').then(result => {
            setProjects(result.data)
        }).catch(err => console.log('Error: ', err)).finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <>
            {projects.map(proj =>
                <ProjectCard props={proj} />
            )}
        </>
    )
}

export default ProjectsPage;