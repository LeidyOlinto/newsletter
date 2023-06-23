import "./formik.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputMask from "react-input-mask";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [gender, setGender] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário para o servidor
    console.log(name, email, cpf);
    //Limpar formulario
    setName("");
    setEmail("");
    setCpf("");
    setGender("");
  }

  return (
    <div className="textSearch">
      <div className="textAlgorithm" id="Linx">
        <span className="textTitle">Ajude o algorítmo a ser mias certeiro</span>
        <p className="information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo
          nisi esse, est molestiae reprehenderit fugiat assumenda reiciendis
          repudiandae magni suscipit nesciunt quaerat. Suscipit laudantium qui
          quis! Quasi, enim perspiciatis.
        </p>
        <p className="information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo
          nisi esse, est molestiae reprehenderit fugiat assumenda reiciendis
          repudiandae magni suscipit nesciunt quaerat. Suscipit laudantium qui
          quis! Quasi, enim perspiciatis.
        </p>
      </div>

      <div className="register" id="algoritimo">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label className="record">Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className="record">E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCpf">
            <Form.Label className="record">CPF</Form.Label>
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            >
              {(inputProps) => (
                <Form.Control
                  type="text"
                  placeholder="Digite o seu CPF"
                  {...inputProps}
                />
              )}
            </InputMask>
          </Form.Group>
          <label className="record">Masculino</label>
          <input
            className="man"
            value="gender"
            name="gender"
            id="gender-male"
            checked={gender === "male"}
            onChange={() => setGender("male")}
            type="radio"
          ></input>
          <label className="record">Feminino</label>
          <input
            className="feminine"
            value="femenino"
            type="radio"
            name="gender"
            id="gender-female"
            checked={gender === "female"}
            onChange={() => setGender("female")}
          ></input>
          <Button variant="primary" type="submit" className="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default MyForm;
