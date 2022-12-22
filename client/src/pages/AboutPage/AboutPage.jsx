import Introduction from "../../components/About/Introduction";
import MyStack from "../../components/About/MyStack";
import ThisIsMe from "../../components/About/ThisIsMe";
import "./AboutPage.css";


function AboutPage() {
  return (
    <div>
      <Introduction />
      <ThisIsMe />
      <MyStack />
    </div>
  );
}

export default AboutPage;