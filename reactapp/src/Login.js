import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
    navigate("/Home");
  };

  return (
    <div className="box">
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <p className="p">Login Form</p>

        <label>Email</label>
        <input type="email" {...register("email", { required: "Email is mandatory" })} />
        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is mandatory" })}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}

        <button type="submit" className="bo">
          <span className="xo">Submit</span>
        </button>

        <Link to="/Register">Don't have an Account? Sign Up</Link>
      </form>
    </div>
  );
}

export default App;
