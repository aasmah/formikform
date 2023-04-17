import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from 'formik';
function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });
  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
    </div>
  );
}

export default App;
