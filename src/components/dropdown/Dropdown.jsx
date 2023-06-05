import "./dropdown.scss";
import $ from "jquery";

function Dropdown() {
  return (
    <>
      <div className="dropdown__container">
        <ul className="dropdown__accordion">
          <li>
            <div className="h5 dropdown__category">
              Diseño UX/UI<span className="dropdown__icon"></span>
            </div>
            <ul className="text-default dropdown__projects-list">
              <li>
                <span>SubMenu01</span>
                <span>Tipology</span>
              </li>
              <li>
                <span>SubMenu02</span>
                <span>Tipology</span>
              </li>
              <li>
                <span>SubMenu03</span>
                <span>Tipology</span>
              </li>
            </ul>
          </li>
          <li>
            <div className="h5 dropdown__category">
              Diseño gráfico<span className="dropdown__icon"></span>
            </div>
            <ul className="text-default dropdown__projects-list">
              <li>
                <span>SubMenu01</span>
                <span>Tipology</span>
              </li>
              <li>
                <span>SubMenu02</span>
                <span>Tipology</span>
              </li>
              <li>
                <span>SubMenu03</span>
                <span>Tipology</span>
              </li>
            </ul>
          </li>
          <li>
            <div className="h5 dropdown__category">
              Desarrollo web<span className="dropdown__icon"></span>
            </div>
            <ul className="text-default dropdown__projects-list">
              <li>
                <span>SubMenu01</span>
                <span>Tipology</span>
              </li>
              <li>
                <span>SubMenu02</span>
                <span>Tipology</span>
              </li>
              <li>
                <span>SubMenu03</span>
                <span>Tipology</span>
              </li>
            </ul>
          </li>
          <li>
            <div className="h5 dropdown__category">
              Otros proyectos<span className="dropdown__icon"></span>
            </div>
            <ul className="text-default dropdown__projects-list">
              <li>
                <span>SubMenu01</span>
                <span>Tipology</span>
              </li>
              <li>
                <span>SubMenu02</span>
                <span>Tipology</span>
              </li>
              <li>
                <span>SubMenu03</span>
                <span>Tipology</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

$(function () {
  $(".dropdown__accordion li").click(function () {
    $(this).children(".dropdown__projects-list").slideToggle();

    if ($(this).children(".dropdown__category").hasClass("active")) {
      $(this).children(".dropdown__category").removeClass("active");
    } else {
      $(this).children(".dropdown__category").addClass("active");
    }

    return false;
  });
});

export default Dropdown;
