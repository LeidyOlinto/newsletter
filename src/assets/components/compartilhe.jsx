import "./compartilhe.css";

import React from "react";
import Division from "./Division.jsx";

function Compartilhe() {
  return (
    <div>
       <Division />
      <div className="friendInfor" id="Compartilhe">
        <div className="friendText">
          Quer que seus amigos também ganhem a lista persolazada deles? Preencha
          agora!
        </div>
        <div className="userInformation">
          <div className="userName">
            <label className="userInformationText">Nome do seu amigo:</label>
            <input className="userInformationBox" type="text" id="" />
          </div>
          <div>
            <label className="userInformationText">E-mail:</label>
            <input
              className="userInformationBox"
              type="text"
              name="Digite seu E-mail"
              id=""
            />
          </div>
        </div>
        <div className="userButton">
          <button className="userInformationButton">Enviar agora</button>
        </div>
      </div>
    </div>
  );
}

export default Compartilhe;
