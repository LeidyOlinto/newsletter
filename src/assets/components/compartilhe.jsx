import "./compartilhe.css";
import React, { useState } from "react";

import Division from "./Division.jsx";

function Compartilhe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};

    // Validar o campo nome
    if (name.trim() === "") {
      isValid = false;
      newErrors.name = "Nome é obrigatório";
    }
    // Validar o campo email
    if (email.trim() === "") {
      isValid = false;
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      newErrors.email = "Email inválido";
    }

    if (isValid) {
      // Lógica para enviar os dados (por exemplo, fazer uma solicitação HTTP)
      console.log("Name:", name);
      console.log("Email:", email);

      // Limpar os campos do formulário
      setName("");
      setEmail("");

      // Limpar os erros
      setErrors({});
    } else {
      // Atualizar os erros de validação
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <Division title={"Compartilhe a novidade"} />

      <div className="friendInfor" id="Compartilhe">
        <div className="friendText">
          Quer que seus amigos também ganhem a lista personalizada deles?
          Preencha agora!
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
              {errors.name && (
                <span className="formFied_error">{errors.name}</span>
              )}
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
              />{" "}
              {errors.email && (
                <span className="formFied_error">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="userButton">
            <button className="userInformationButton" type="submit">
              Enviar agora
            </button>
          </div>
        </form>
        <a className="proximaP" href="/selection" target="_blank">
          Próxima página
        </a>
      </div>
    </div>
  );
}

export default Compartilhe;
