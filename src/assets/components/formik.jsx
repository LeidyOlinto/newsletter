import React from 'react';
import { useFormik } from 'formik';



const validate = values => {
  console.log(values ,"deu aqui ")
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email';
  }

  if (!values.cpf) {
    errors.cpf = 'Required';
  } else if (values.cpf.length > 12) {
    errors.cpf = 'Must be 20 characters or less';
  }

  return errors;
};

const InviteFriends= () => {
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      cpf: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
    onSubmit={(event) => {
      event.preventDefault();
      console.log(formik.values, "deu certo");
    }}>
      <label htmlFor="name"> Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <label htmlFor="cpf">Cpf:</label>
      <input
        id="cpf"
        name="cpf"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cpf}
      />
      {formik.errors.cpf ? <div>{formik.errors.cpf}</div> : null}

      <button onClick={formik.values.handleChange}  type="submit">Submit</button>
    </form>
  );
};
export default InviteFriends
