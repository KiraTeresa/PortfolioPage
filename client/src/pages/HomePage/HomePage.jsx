import Introduction from "../../components/About/Introduction";
import Quotation from "../../components/About/Quotation";
import ProjectCard from "../../components/Projects/ProjectCard";
import apiClient from '../../services/apiClient';
import { useEffect, useState } from 'react';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [latestProject, setLatestProject] = useState({})

  useEffect(() => {
    apiClient.get("/projects/latest").then(result => {
      setLatestProject(result.data)
    }).catch(err => console.log("Error: ", err)).finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <div>
      <Introduction />
      <Quotation />
      <ProjectCard props={latestProject} />
    </div>
  );
}

export default HomePage;