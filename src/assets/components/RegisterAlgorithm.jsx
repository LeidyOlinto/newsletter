import { useState } from "react";
import "./RegisterAlgorithm.css";

function Register() {
 
  return (
    <main className="textSearch">
      <div className="textAlgorithm">
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
      <div className="register">
        <form>
          <label className="record">Seu nome:</label>
          <input type="text" name="Digite seu nome" id="" />
          <label className="record">E-mail:</label>
          <input type="text" name="Digite seu E-mail" id="" />
          <label className="record">CPF:</label>
          <input type="nunber" name="Digite seu CPF" id="" />
          <label className="record">Masculino</label>
          <input className="man" type="radio"></input>
          <label className="record">Feminino</label>
          <input className="feminine" type="radio"></input>

          <button className="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}
export default Register;