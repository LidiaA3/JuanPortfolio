import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import $ from "jquery";
import { Link } from "react-router-dom";

import "./dropdown.scss";

function Dropdown() {
  const [dropdownActive, setDropdownActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDropdownActive(false); // Cierra el desplegable al cambiar de ubicación
  }, [location]);

  useEffect(() => {
    const handleClick = (event) => {
      // Verificar si se hizo clic en el elemento .dropdown__category
      if ($(event.target).hasClass("dropdown__category")) {
        const listItem = $(event.target).closest("li");
        listItem.find(".dropdown__projects-list").slideToggle();
        listItem.find(".dropdown__category").toggleClass("active");
        setDropdownActive((prevState) => !prevState);
      }
    };

    $(".dropdown__accordion").on("click", handleClick);

    return () => {
      $(".dropdown__accordion").off("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="dropdown__container">
        <ul className="dropdown__accordion">
          <li>
            <div
              className={`h5 dropdown__category ${
                dropdownActive ? "active" : ""
              }`}
            >
              Diseño UX/UI<span className="dropdown__icon"></span>
            </div>
            <ul className="text-default dropdown__projects-list">
              <Link to="/project" className="link">
                <li>
                  <span>Maslow</span>
                  <span>Web</span>
                </li>
              </Link>
              <li>
                <span>Tutum</span>
                <span>Web</span>
              </li>
              <li>
                <span>Transportes Ray</span>
                <span>Aplicación</span>
              </li>
            </ul>
          </li>
          <li>
            <div
              className={`h5 dropdown__category ${
                dropdownActive ? "active" : ""
              }`}
            >
              Diseño gráfico<span className="dropdown__icon"></span>
            </div>
            <ul className="text-default dropdown__projects-list">
              <li>
                <span>Festival Jazzing '23</span>
                <span>Cartelería</span>
              </li>
              <li>
                <span>Revista Focus</span>
                <span>Editorial</span>
              </li>
              <li>
                <span>Èlia Bastida</span>
                <span>Marca personal</span>
              </li>
            </ul>
          </li>
          <li>
            <div
              className={`h5 dropdown__category ${
                dropdownActive ? "active" : ""
              }`}
            >
              Desarrollo web<span className="dropdown__icon"></span>
            </div>
            <ul className="text-default dropdown__projects-list">
              <li>
                <span>Todo App</span>
                <span>Desarrollo</span>
              </li>
              <li>
                <span>Maslow</span>
                <span>Desarrollo</span>
              </li>
              <li>
                <span>Babel</span>
                <span>Maquetación</span>
              </li>
            </ul>
          </li>
          <li>
            <div
              className={`h5 dropdown__category ${
                dropdownActive ? "active" : ""
              }`}
            >
              Otros<span className="dropdown__icon"></span>
            </div>
            <ul className="text-default dropdown__projects-list">
              <li>
                <span>3.00 pm in NY</span>
                <span>Diseño sonoro</span>
              </li>
              <li>
                <span>Slow light</span>
                <span>Diseño sonoro</span>
              </li>
              <li>
                <span>Paisajes</span>
                <span>Fotografía</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
