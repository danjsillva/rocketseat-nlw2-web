import React from "react";

import WhatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeachersItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/5527186?s=460&u=9c88f4e63a2ea5d5622d3de0cffe6f1b74b9536b&v=4"
          alt="Daniel Silva"
        />
        <div className="">
          <strong>Daniel Silva</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan
        lacus vel facilisis volutpat est velit egestas dui. Est placerat in
        egestas erat imperdiet sed euismod.
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$ 400,00</strong>
        </p>
        <button type="button">
          <img src={WhatsappIcon} alt="WhatsApp" /> Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeachersItem;
