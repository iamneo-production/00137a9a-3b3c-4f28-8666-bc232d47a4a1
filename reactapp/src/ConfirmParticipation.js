import React, { useState } from "react";
import "./ConfirmParticiation.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { getregister } from "./api";

const ConfirmParticipation = ({ setUserState }) => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    address: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstname) {
      errors.firstname = "First Name is required";
    }

    if (!values.lastname) {
      errors.lastname = "Last Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm Password is required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Confirm password and password should be the same";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    return errors;
  };

  const signupHandler = (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      getregister(user)
        .then((response) => {
          console.log("Registration successful!");
          navigate("/Home");
        })
        .catch((error) => {
          console.error("Registration failed!", error);
        });
    }
  };

  return (
    <div className="signn">
      <div className="sign">
        <form>
          <h1>CONFIRMATION</h1>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.firstname}
            className="ab"
          />
          <p className="b">{formErrors.firstname}</p>

          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lastname}
            className="ab"
          />
          <p className="b">{formErrors.lastname}</p>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
            className="ab"
          />
          <p className="b">{formErrors.email}</p>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
            className="ab"
          />
          <p className="b">{formErrors.password}</p>

          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.confirmpassword}
            className="ab"
          />
          <p className="b">{formErrors.confirmpassword}</p>

          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            onChange={changeHandler}
            value={user.address}
            className="ab"
          />
          <p className="b">{formErrors.address}</p>

   
            <button className="btnn" onClick={signupHandler}>
              Register
            </button>

        </form>
        <br />
      </div>
    </div>
  );
};

export default ConfirmParticipation;
