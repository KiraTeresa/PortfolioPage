import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import ProjectCard from "../../components/Projects/ProjectCard";
import apiClient from "../../services/apiClient";

function ProjectsPage() {
    // const [isOdd, setIsOdd] = useState(false)
    let isOdd = false
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        apiClient.get('/projects').then(result => {
            setProjects(result.data)
        }).catch(err => console.log('Error: ', err)).finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            {projects.map(proj => {
                isOdd = !isOdd;
                return <ProjectCard props={{ proj, isOdd }} key={proj.no} />
            }
            )}
        </>
    )
}

export default ProjectsPage;