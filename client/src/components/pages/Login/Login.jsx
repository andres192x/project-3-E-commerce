import React from 'react';
import './Login.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { NEW_LOGIN } from '../../../utils/mutations';

import { onError } from '@apollo/client/link/error';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function Login({handlePageRender}) {
  const [login] = useMutation(NEW_LOGIN)

  const loginUser = async (e) => {
    e.preventDefault();
    const userEmail = e.target.previousSibling.previousSibling.previousSibling.childNodes[1].value;
    const userPassword = e.target.previousSibling.previousSibling.childNodes[1].value;
    // const userName = e.target.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1].value;
    try {
      const loginAction = await login({
        variables: {
          // name: userName,
          email: userEmail,
          password: userPassword
        }
      });
      if(loginAction) {
        // console.log('logged in: ', loginAction);
        handlePageRender('cart');
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    // <ApolloProvider client={client}>
      <div className='container'>
        <form className='form'>
          <h2>Login</h2>

          {/* <div className='form-item'>
            <label for="exampleInputUsername1" >Username</label>
            <input type="username" id="username" />
          </div> */}

          <div className='form-item'>
            <label for="exampleInputEmail1" >Email address</label>
            <input type="email" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp">We'll never share your email with anyone else.</div>

          </div>

          <div className='form-item'>
            <label for="exampleInputPassword1" >Password</label>
            <input type="password" id="password" />
          </div>

          <div>
            <input type="checkbox" id="exampleCheck1" />
            <label for="exampleCheck1">Remember me</label>
          </div>
          <button onClick={loginUser} >Sign in</button>

          <div className='form-item'>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
          </div>
        </form>
      </div>
    // {/* </ApolloProvider> */}
  );
}

export default Login;