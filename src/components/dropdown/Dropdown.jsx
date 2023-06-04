import "./dropdown.scss";

function Dropdown() {
  return (
    <>
      <div class="dropdown__container">
        <ul class="dropdown__accordion">
          <li>
            <div class="h5 dropdown__category">
              Diseño UX/UI<span class="dropdown__icon"></span>
            </div>
            <ul class="dropdown__projects-list">
              <li>SubMenu01</li>
              <li>SubMenu02</li>
              <li>SubMenu03</li>
            </ul>
          </li>
          <li>
            <div class="h5 dropdown__category">
              Diseño gráfico<span class="dropdown__icon"></span>
            </div>
            <ul class="dropdown__projects-list">
              <li>SubMenu01</li>
              <li>SubMenu02</li>
              <li>SubMenu03</li>
            </ul>
          </li>
          <li>
            <div class="h5 dropdown__category">
              Desarrollo web<span class="dropdown__icon"></span>
            </div>
            <ul class="dropdown__projects-list">
              <li>SubMenu01</li>
              <li>SubMenu02</li>
              <li>SubMenu03</li>
            </ul>
          </li>
          <li>
            <div class="h5 dropdown__category">
              Otros proyectos<span class="dropdown__icon"></span>
            </div>
            <ul class="dropdown__projects-list">
              <li>SubMenu01</li>
              <li>SubMenu02</li>
              <li>SubMenu03</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
