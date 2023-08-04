import "./project-info.scss";

function ProjectInfo(Props) {
  return (
    <>
      <div className="project-info__container">
        <div className="project-info__container--box">
          <span className="project-info__category">Rol</span>
          <span className="project-info__data">{Props.role}</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Tipología</span>
          <span className="project-info__data">{Props.typology}</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Tecnologías</span>
          <span className="project-info__data">{Props.technologies}</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Herramientas</span>
          <span className="project-info__data">{Props.tools}</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Agencia</span>
          <span className="project-info__data">{Props.agency}</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Cliente</span>
          <span className="project-info__data">{Props.client}</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Año</span>
          <span className="project-info__data">{Props.year}</span>
        </div>
        <div className="project-info__container--box">
          <span className="project-info__category">Link</span>
          <span className="project-info__data">{Props.link}</span>
        </div>
      </div>
    </>
  );
}

export default ProjectInfo;
