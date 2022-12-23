import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/apiClient";

function ProjectsDetail() {
    const { slug } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [project, setProject] = useState([])

    useEffect(() => {
        apiClient.get(`/projects/${slug}`).then(result => setProject(result.data)).catch(err => console.log('Error: ', err)).finally(() => setIsLoading(false))
    }, [slug])

    if (isLoading) {
        return <div>Loading....</div>
    }

    const { title, description, image } = project

    return (
        <div>
            <h1>Project {title}</h1>
            <div>{description}</div>
            <div>{image}</div>
        </div>
    )
}

export default ProjectsDetail;