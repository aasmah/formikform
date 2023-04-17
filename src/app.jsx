import React from "react";

// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });
  //   app is ready! todo:  form should include the following:

  // Email field
  // Password field
  // Submit button

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div> Email: </div>
        <input
          type="text"
          name="email"
          id="emailField"
          onChange={formik.handleChange}
          value={formik.values.email}
        />{" "}
        {formik.errors.email ? (
          <div
            id="emailError"
            style={{
              color: "red",
            }}
          >
            {" "}
            {formik.errors.email}{" "}
          </div>
        ) : null}{" "}
        <div> Password: </div>{" "}
        <input
          type="text"
          name="password"
          id="pswField"
          onChange={formik.handleChange}
          value={formik.values.password}
        />{" "}
        <br />{" "}
        {formik.errors.password ? (
          <div
            id="pswError"
            style={{
              color: "red",
            }}
          >
            {" "}
            {formik.errors.password}{" "}
          </div>
        ) : null}{" "}
        <button type="submit"> Submit </button>{" "}
      </form>{" "}
    </div>
  );
}

export default App;
