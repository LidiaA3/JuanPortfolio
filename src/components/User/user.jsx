import "./user.scss";

function User() {
  return (
    <>
      <div className="user__container">
        <div className="user__container--basic-data">
          <div className="user__container--box">
            <img src="src/assets/img/toni_perfil.png" alt="" />
          </div>
          <div className="user__container--box">
            <span className="user__category h4">Toni Carrillo</span>
            <div className="user__container--box">
              <span className="user__category">Edad</span>
              <span className="user__data">23 Años </span>
            </div>
          </div>
          <div className="user__container--box">
            <span className="user__category">• Género</span>
            <span className="user__data">Masculino</span>
          </div>
          <div className="user__container--box">
            <span className="user__category">• Ingresos</span>
            <span className="user__data">20k anuales</span>
          </div>
          <div className="user__container--box">
            <span className="user__category">• Profesión</span>
            <span className="user__data">Músico profesional</span>
          </div>
          <div className="user__container--box">
            <span className="user__category">• Estudios</span>
            <span className="user__data">Título Superior de Música</span>
          </div>
        </div>
        <div className="user__container--descriptions">
          <div className="user__container--box">
            <span className="user__category">Biografía</span>
            <span className="user__data">
              Phasellus tristique risus a purus tincidunt, vel commodo justo
              feugiat. Aenean luctus ipsum vitae velit feugiat, ut lacinia velit
              tincidunt.
            </span>
          </div>
          <div className="user__container--box">
            <span className="user__category">Motivación</span>
            <span className="user__data">
              Curabitur mattis elit et ultrices vehicula. Praesent tempus purus
              ac sapien dictum, eget dignissim orci finibus.
            </span>
          </div>
          <div className="user__container--box">
            <span className="user__category">Objetivos y frustraciones</span>
            <span className="user__data">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vestibulum velit vitae sapien rutrum.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
