import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../services/apiClient";
import ProjectCard from "../../components/Projects/ProjectCard"
import Features from "../../components/Projects/Features";
import Technologies from "../../components/Projects/Technologies";
import Screenshots from "../../components/Projects/Screenshots";
import Loading from "../../components/Loading/Loading";

function ProjectsDetail() {
    const { slug } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [project, setProject] = useState([])

    useEffect(() => {
        apiClient.get(`/projects/${slug}`).then(result => setProject(result.data)).catch(err => console.log('Error: ', err)).finally(() => setIsLoading(false))
    }, [slug])

    if (isLoading) {
        return <Loading />
    }

    const { description, tech, screenshots } = project

    return (
        <div className='proj-detail-wrapper'>
            <ProjectCard props={{ proj: project, isOdd: true }} />
            <Features props={{ description }} />
            <Technologies props={{ tech }} />
            <Screenshots props={{ screenshots }} />
            {/* <div>{description}</div>
            <div>{image}</div> */}
        </div>
    )
}

export default ProjectsDetail;