import React, {useState} from 'react';
import './Login.css';
//import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { NEW_LOGIN } from '../../../utils/mutations';

//import { onError } from '@apollo/client/link/error';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });


function Login({handlePageRender}) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(NEW_LOGIN)

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    //const userEmail = e.target.previousSibling.previousSibling.previousSibling.childNodes[1].value;
  
    //const userPassword = e.target.previousSibling.previousSibling.childNodes[1].value;
    console.log(formState.email);
    console.log(formState.password);
    // const userName = e.target.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1].value;
    try {
      const loginAction = await login({
        variables: {
          // name: userName,
          email: formState.email,
          password: formState.password
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

         

          <div className='form-item'>
            <label htmlFor="exampleInputEmail1" >Email address</label>
            <input type="email" id="email" aria-describedby="emailHelp" name="email" value={formState.email} onChange={handleChange} />
            <div id="emailHelp">We'll never share your email with anyone else.</div>

          </div>

          <div className='form-item'>
            <label htmlFor="exampleInputPassword1" >Password</label>
            <input type="password" id="password" name="password" value={formState.password}  onChange={handleChange}/>
          </div>

          <div>
            <input type="checkbox" id="exampleCheck1" />
            <label htmlFor="exampleCheck1">Remember me</label>
          </div>
          <button onClick={loginUser} >Sign in</button>

          <div className='form-item'>
            <p>Don't have an account? <a onClick={() => handlePageRender('signup')} href="#signup">Sign up</a></p>
          </div>
        </form>
      </div>
    // {/* </ApolloProvider> */}
  );
}

export default Login;