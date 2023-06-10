import "./Project.scss";
import Topbar from "../../components/topbar/Topbar";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";

function Project() {
  return (
    <>
      <Topbar url="/portafolio" link="Portafolio" />
      <main className="portfolio-main">
        <h2 className="h2">Website para Maslow</h2>
        <ProjectInfo />
      </main>
    </>
  );
}

export default Project;
