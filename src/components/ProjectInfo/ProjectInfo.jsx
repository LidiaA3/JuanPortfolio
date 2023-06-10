import "./project-info.scss";

function ProjectInfo() {
  return (
    <>
      <div className="project-info__container">
        <div className="project-info__container--box">
          <span className="project-info__category">Rol</span>
          <span className="project-info__data">Diseñador UI</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Tipología</span>
          <span className="project-info__data">Web</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Tecnologías</span>
          <span className="project-info__data">
            Html, Scss, Javascript, Php
          </span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Herramientas</span>
          <span className="project-info__data">VS Code, Wordpress</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Agencia</span>
          <span className="project-info__data">Proyecto personal</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Cliente</span>
          <span className="project-info__data">Proyecto personal</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Año</span>
          <span className="project-info__data">2023</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Link</span>
          <span className="project-info__data">Visitar website</span>
        </div>
      </div>
    </>
  );
}

export default ProjectInfo;
