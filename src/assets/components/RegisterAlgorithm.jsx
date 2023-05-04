import { useState, useEffect } from "react";
import { Formik } from "formik";

import "./RegisterAlgorithm.css";

function useFormik({ initialValues, validate }) {
  const [touched, setTouchedFied] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    //console.log("Alguem mexeu nos valores");
    validateValues(values);
  }, [values]);

  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    const { value } = event.target;
    setValues({
      ...value,
      [fieldName]: value,
    });
  }
  function handleBlur(event) {
    const fieldName = event.target.getAttribute("name");

    console.log(fieldName);
    setTouchedFied({
      ...touched,
      [fieldName]: true,
    });
  }
  function validateValues(values) {
    setErrors(validate(values));
  }
  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}
function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      cpf: "",
    },

    validate: function (values) {
      const errors = {};
      console.log();
      // if (!values.name) {
      //   errors.name = "Invalid name ";
      // } else if (values.name.length > 30) {
      //   errors.name = "Nome invalid,user name valid";
      // }
      if (!values.email) {
        errors.email = "Invalid email ";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (values.cpf) {
        errors.cpf = "Invalid cpf";
      } else if (
        !/^[1-9.][A-Z0-9.-]{2,}$/i.test(values.cpf)
      ) {
        errors.cpf = "Invalid cpf address";
      }
      return errors;
    },
  });
 
  return (
    <main className="textSearch">
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
        <Formik>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(formik.values, "deu certo");
            }}
          >
            <div>
              <label htmlFor="userName" className="record">
                Seu nome:
              </label>
              <input
                type="text"
                placeholder="Maria Algusta"
                name="name"
                id="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name }
              />
              {formik.touched.name && formik.errors.name && (
                <span className="formFied_error">{formik.errors.name}</span>
              )}
            </div>
            <div>
              <label className="record" htmlFor="userEmail">
                
                E-mail:
              </label>
              <input
                type="text"
                placeholder="email@example.com"
                name="email"
                id="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email }
              />
              {formik.touched.email && formik.errors.email && (
                <span className="formFied_error">{formik.errors.email}</span>
              )}
            </div>
            <div>
              <label className="record" htmlFor="userCpf">
                
                CPF:
              </label>
              <input
                type="text"
                placeholder="09989475874"
                name="userCpf"
                id="userCpf"
                maxLength="14"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.cpf }
                //onKeyUp={mascaraCpf}
                
              />
              {formik.touched.cpf && formik.errors.cpf && (
                <span className="formFied_error">{formik.errors.cpf}</span>
              )}
            </div>
            <label className="record">Masculino</label>
            <input className="man" value="masculino" type="radio"></input>
            <label className="record">Feminino</label>
            <input className="feminine" value="femenino" type="radio"></input>

            <button onClick={formik.values.handleChange} className="submit">
              Enviar
            </button>
          </form>
        </Formik>
      </div>
    </main>
  );
}
export default Register;
