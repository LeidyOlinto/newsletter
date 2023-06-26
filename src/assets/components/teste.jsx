// import React, { Component } from "react";
// import Division from "./Division.jsx";
// import { useState } from "react";

// class MeuFormulario extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: "",
//       email: "",
//       erroNome: "",
//       erroEmail: "",
//       setName:"",
//       setEmail:""
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { nome, email } = this.state;
//     if (isValid) {
//       // Lógica para enviar os dados

//       setName(""); // Limpar o campo nome
//     }
//     // Validação dos campos
//     let erroNome = "";
//     let erroEmail = "";

//     if (!nome) {
//       erroNome = "O campo nome é obrigatório.";
//     }

//     if (!email) {
//       erroEmail = "O campo email é obrigatório.";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       erroEmail = "O email digitado é inválido.";
//     }

//     if (erroNome || erroEmail) {
//       this.setState({ erroNome, erroEmail });
//     } else {
//       // Lógica de envio do formulário
//       console.log("Formulário enviado!");
//     }
//       setName("");
//       setEmail("")
//   };

//   render() {
//     const { nome, email, erroNome, erroEmail } = this.state;

//     return (
//       <div>
//         <Division title={"Compartilhe a novidade"} />
//         <div className="friendInfor" id="Compartilhe">
//         <div className="friendText">
//           Quer que seus amigos também ganhem a lista personalizada deles?
//           Preencha agora!
//         </div>
//         <form onSubmit={this.handleSubmit}>
//         <div className="userInformation">
//         <div className="userName">
//             <label className="userInformationText" htmlFor="nome">Nome do seu amigo:</label>
//             <input className="userInformationBox"
//               type="text"
//               id="nome"
//               name="nome"
//               value={nome}
//               placeholder="Digite o seu nome"
//               onChange={this.handleChange}
//             />
//             {erroNome && <span>{erroNome}</span>}
//           </div>
//           <div>
//             <label className="userInformationText" htmlFor="email">Email:</label>
//             <input  className="userInformationBox"
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               placeholder="Digite o seu e-mail"
//               onChange={this.handleChange}
//             />
//             {erroEmail && <span>{erroEmail}</span>}
//           </div>
//           <div className="userButton">
//             <button className="userInformationButton" type="submit">
//                Enviar agora
//             </button>
//           </div>
//           </div>
//         </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default MeuFormulario;
// import "./formik.css";
// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import InputMask from "react-input-mask";

// const MyForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [cpf, setCpf] = useState("");
//   const [gender, setGender] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     // Aqui você pode enviar os dados do formulário para o servidor
//     console.log(name, email, cpf);
//     //Limpar formulario
//     setName("");
//     setEmail("");
//     setCpf("");
//     setGender("");
//   }

//   return (
//     <div className="textSearch">
//       <div className="textAlgorithm" id="Linx">
//         <span className="textTitle">Ajude o algorítmo a ser mias certeiro</span>
//         <p className="information">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo
//           nisi esse, est molestiae reprehenderit fugiat assumenda reiciendis
//           repudiandae magni suscipit nesciunt quaerat. Suscipit laudantium qui
//           quis! Quasi, enim perspiciatis.
//         </p>
//         <p className="information">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo
//           nisi esse, est molestiae reprehenderit fugiat assumenda reiciendis
//           repudiandae magni suscipit nesciunt quaerat. Suscipit laudantium qui
//           quis! Quasi, enim perspiciatis.
//         </p>
//       </div>

//       <div className="register" id="algoritimo">
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formName">
//             <Form.Label className="record">Nome</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Digite o seu nome"
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formEmail">
//             <Form.Label className="record">E-mail</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Digite o seu e-mail"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formCpf">
//             <Form.Label className="record">CPF</Form.Label>
//             <InputMask
//               mask="999.999.999-99"
//               value={cpf}
//               onChange={(event) => setCpf(event.target.value)}
//             >
//               {(inputProps) => (
//                 <Form.Control
//                   type="text"
//                   placeholder="Digite o seu CPF"
//                   {...inputProps}
//                 />
//               )}
//             </InputMask>
//           </Form.Group>
//           <label className="record">Masculino</label>
//           <input
//             className="man"
//             value="gender"
//             name="gender"
//             id="gender-male"
//             checked={gender === "male"}
//             onChange={() => setGender("male")}
//             type="radio"
//           ></input>
//           <label className="record">Feminino</label>
//           <input
//             className="feminine"
//             value="femenino"
//             type="radio"
//             name="gender"
//             id="gender-female"
//             checked={gender === "female"}
//             onChange={() => setGender("female")}
//           ></input>
//           <Button variant="primary" type="submit" className="submit">
//             Enviar
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default MyForm;





const MyForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // Lógica para enviar os dados do formulário para o servidor
    console.log(values);
    // Limpar o formulário após o envio
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    cpf: Yup.string().required("CPF é obrigatório"),
  });

  return (
    <div className="textSearch">
      {/* Restante do código omitido para brevidade */}

      <div className="register" id="algoritimo">
        <Formik
          initialValues={{
            name: "",
            email: "",
            cpf: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className="record">Nome</Form.Label>
              <Field
                type="text"
                name="name"
                placeholder="Digite o seu nome"
                as={Form.Control}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className="record">E-mail</Form.Label>
              <Field
                type="email"
                name="email"
                placeholder="Digite o seu e-mail"
                as={Form.Control}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </Form.Group>

            <Form.Group controlId="formCpf">
              <Form.Label className="record">CPF</Form.Label>
              <Field name="cpf">
                {({ field }) => (
                  <InputMask
                    mask="999.999.999-99"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    {(inputProps) => (
                      <Form.Control
                        type="text"
                        placeholder="Digite o seu CPF"
                        {...inputProps}
                      />
                    )}
                  </InputMask>
                )}
              </Field>
              <ErrorMessage name="cpf" component="div" className="error" />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit">
              Enviar
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default MyForm;