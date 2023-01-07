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
  const [positions, setPositions] = useState({
    myImage: '',
    introduction: '',
    quotation: 'hidden',
    projectCard: 'hidden'
  })

  useEffect(() => {
    apiClient.get("/projects/latest").then(result => {
      setLatestProject(result.data)
    }).catch(err => console.log("Error: ", err)).finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <div>Loading....</div>
  }

  const { myImage, introduction, quotation, projectCard } = positions

  return (
    <div className="container">
      <MyImage position={`${myImage}`} />
      <Introduction position={`${introduction}`} />
      <Quotation position={`${quotation}`} />
      {/* <ProjectCard props={{ proj: latestProject, isOdd: true }} /> */}
    </div>
  );
}

export default HomePage;