import Introduction from "../../components/About/Introduction";
import Quotation from "../../components/About/Quotation";
import ProjectCard from "../../components/Projects/ProjectCard";
import apiClient from '../../services/apiClient';
import { useEffect, useState } from 'react';
import MyImage from "../../components/About/Image";
import "./homepage.scss"

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
    <div className="container">
      {/* <MyImage /> */}
      <Introduction />
      {/* <Quotation /> */}
      {/* <ProjectCard props={{ proj: latestProject, isOdd: true }} /> */}
    </div>
  );
}

export default HomePage;