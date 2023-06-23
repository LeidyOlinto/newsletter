import "./compartilhe.css";
import React, { useState } from "react";

import Division from "./Division.jsx";

function Compartilhe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados (por exemplo, fazer uma solicitação HTTP)
    console.log("Name:", name);
    console.log("Email:", email);

    // Limpar os campos do formulário
    setName("");
    setEmail("");
  };

  return (
    <div>
      <Division title={"Compartilhe a novidade"} />

      <div className="friendInfor" id="Compartilhe">
        <div className="friendText">
          Quer que seus amigos também ganhem a lista persolazada deles? Preencha
          agora!
        </div>
        <form onSubmit={handleSubmit}>
          <div className="userInformation">
            <div className="userName">
              <label className="userInformationText" htmlFor="name">
                Nome do seu amigo:
              </label>
              <input
                className="userInformationBox"
                type="text"
                placeholder="Digite o seu nome"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label className="userInformationText" htmlFor="email">
                E-mail:
              </label>
              <input
                className="userInformationBox"
                name="Digite seu E-mail"
                placeholder="Digite o seu e-mail"
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>

          <div className="userButton">
            <button className="userInformationButton" type="submit">
              Enviar agora
            </button>
          </div>
        </form>
        <a className="proximaP" href="http://localhost:5173/selection">
          Próxima página
        </a>
      </div>
    </div>
  );
}

export default Compartilhe;
