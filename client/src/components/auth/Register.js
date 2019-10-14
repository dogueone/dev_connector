import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //                                                       Making request within component using axios
  // const onSubmit = async e => {
  //   e.preventDefault();
  //   if (password !== password2) {
  //     console.log('Passwords do not match');
  //   } else {
  //     const newUser = {
  //       name: name,
  //       email,
  //       password
  //     };

  //     try {
  //       const config = {
  //         headers: {
  //           'Content-Type': 'Application/json'
  //         }
  //       };

  //       const body = JSON.stringify(newUser);

  //       const res = await axios.post('/api/users', body, config);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.error(err.response.data);
  //     }
  //   }
  // };
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log('SUCCESS');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create your account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={e => onChange(e)}
            name='name'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={e => onChange(e)}
            name='email'
          />
          <small className='form-text'>
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            minlenght='6'
            value={password}
            onChange={e => onChange(e)}
            name='password'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            minlenght='6'
            value={password2}
            onChange={e => onChange(e)}
            name='password2'
          />
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
