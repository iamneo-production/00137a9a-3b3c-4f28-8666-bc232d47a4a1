import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Register.css';
import axios from 'axios';
import { getreg } from './api';

function RegistrationForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
      try {
        console.log('Submitting data:', data);
        const response = await getreg;
        console.log('Response:', response.data);
        navigate('/Home');
      } catch (error) {
        console.error('Error while registering:', error);
      }
    
  };
  return (
    <div className="registration-page">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label>
            <input
              {...register('firstname', {
                required: 'Firstname is required',
              })}
              placeholder="Firstname"
              type="text"
              className="input"
            />
          </label>

          <label>
            <input
              {...register('lastname', {
                required: 'Lastname is required',
              })}
              placeholder="Lastname"
              type="text"
              className="input-1"
            />
          </label>
        </div>
        {errors.firstname && (
          <span style={{ color: 'red' }}>{errors.firstname.message}</span>
        )}
        {errors.lastname && (
          <span style={{ color: 'red' }}>{errors.lastname.message}</span>
        )}

        <label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email"
            type="email"
            className="input"
          />
        </label>
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

        <label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            placeholder="Password"
            type="password"
            className="input"
          />
        </label>
        {errors.password && (
          <span style={{ color: 'red' }}>{errors.password.message}</span>
        )}

        <label>
          <input
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === getValues('password') || 'Passwords do not match',
            })}
            placeholder="Confirm Password"
            type="password"
            className="input"
          />
        </label>
        {errors.confirmPassword && (
          <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>
        )}

        <button type="submit" className="bo" id="bo">
          <span className="xo">Submit</span>
        </button>
        <Link to="/">Already have an Account? Sign In</Link>
      </form>
    </div>
  );
}
export default RegistrationForm;
