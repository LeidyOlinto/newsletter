import { useState, useEffect } from "react";
import { Formik } from "formik";

import "./RegisterAlgorithm.css";


function useFormik({ initialValues, validate }) {
  const [touched, setTouchedFied] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    console.log("Alguem mexeu nos valores", values);
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
      userName: "Maria Augusta Reis",
      userEmail: "MariaAugusta@gmail.com",
      userCpf: "02524658724",
    },
   
    validate: function (values) {
      const errors = {};

      if (!values.userName) {
        errors.userName = "Invalid name ";
      } else if (!values.userName.length > 20) {
        errors.userName = "Nome invalid,user name valid";
      }

      if (!values.userEmail) {
        errors.userEmail = "Invalid email ";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail)
      ) {
        errors.userEmail = "Invalid email address";
      }

      if (values.userCpf.length < 12) {
        errors.userCpf = "please,insert a valid CPF";
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
                name="userName"
                id="userName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
              {formik.touched.userName && formik.errors.userName && (
                <span className="formFied_error">{formik.errors.userName}</span>
              )}
            </div>
            <div>
              <label className="record" htmlFor="userEmail">
                {" "}
                E-mail:{" "}
              </label>
              <input
                type="text"
                placeholder="email@example.com"
                name="userEmail"
                id="userEmail"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.userEmail}
              />
              {formik.touched.userEmail && formik.errors.userEmail && (
                <span className="formFied_error">
                  {formik.errors.userEmail}
                </span>
              )}
            </div>
            <div>
              <label className="record" htmlFor="userCpf">
                {" "}
                CPF:
              </label>
              <input
                type="number"
                placeholder="09989475874"
                name="userCpf"
                id="userCpf"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.userCpf}
              />
              {formik.touched.userCpf && formik.errors.userCpf && (
                <span className="formFied_error">{formik.errors.userCpf}</span>
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

