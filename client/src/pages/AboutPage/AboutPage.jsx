import Introduction from "../../components/About/Introduction";
import MyStack from "../../components/About/MyStack";
import ThisIsMe from "../../components/About/ThisIsMe";

function AboutPage() {
  return (
    <div className="container">
      <Introduction />
      <ThisIsMe />
      <MyStack />
    </div>
  );
}

export default AboutPage;