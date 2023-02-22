import React from 'react';
import './Signup.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../../utils/mutations';
import { useRef } from 'react';

function Login({ handlePageRender }) {
  const [addUser] = useMutation(ADD_USER)
  const refUsername = useRef()
  const refEmail = useRef()
  const refPassword = useRef()

  const addNewUser = async (e) => {
    e.preventDefault();
    const name = refUsername.current.value;
    const email = refEmail.current.value;
    const password = refPassword.current.value;

    // console.log('name', name)
    // console.log('email', email)
    // console.log('password', password)

    try {
      const addUserAction = await addUser({
        variables: {
          name: name,
          email: email,
          password: password
        }
      });

      if(addUserAction) {
        console.log('User added to db: ', addUserAction);
        handlePageRender('home');
      }

    } catch (err) {
      console.log(err)
    }


  }

  const renderLogin = (e) => {
    e.preventDefault();
    handlePageRender('login')
  }

  return (
    <div className='container'>
      <form className='sign-up-form'>
        <h1>Create an account</h1>

        <div className='form-item'>
          <label for="username" >Username</label>
          <input ref={refUsername} type="username" id="username" placeholder='Username' />
        </div>

        <div className='form-item'>
          <label for="exampleInputEmail1" >Email address</label>
          <input ref={refEmail} type="email" id="signEmail" aria-describedby="emailHelp" placeholder='Email address' />
        </div>

        <div className='form-item'>
          <label for="exampleInputPassword1" >Password</label>
          <input ref={refPassword} type="password" id="exampleInputPassword1" placeholder='Password' />
          <div id="emailHelp" class="form-text text-1 fs-7 ">Password must contain at least 1 upper case, numeric, and special character.</div>
        </div>

        <button onClick={addNewUser} className='btn' type="submit">Create An Account</button>

        <div className='form-item'>
          <p >Already have an account?</p>
          <button onClick={renderLogin} className='btn'>Login Here</button>
        </div>
      </form>
    </div>
  );
}

export default Login;