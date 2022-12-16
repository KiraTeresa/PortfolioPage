import Introduction from "../../components/About/Introduction";
import Quotation from "../../components/About/quotation";
import ProjectCard from "../../components/Projects/ProjectCard";
import "./HomePage.css";


function HomePage() {
  return (
    <div>
      <Introduction />
      <Quotation />
      <ProjectCard />
    </div>
  );
}

export default HomePage;