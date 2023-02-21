import React, {useState} from 'react';
import { useMutation } from '@apollo/client'
import { NEW_USER } from '../../../utils/mutations';
// import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  //const [login] = useMutation(NEW_USER)

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const signUp = async (e) => {
    e.preventDefault();
    //const userEmail = e.target.previousSibling.previousSibling.previousSibling.childNodes[1].value;
  
    //const userPassword = e.target.previousSibling.previousSibling.childNodes[1].value;
    console.log(formState.email);
    console.log(formState.password);
    console.log(formState.name);
    // const userName = e.target.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[1].value;
    try {
      // const loginAction = await login({
      //   variables: {
      //     // name: userName,
      //     email: formState.email,
      //     password: formState.password
      //   }
      // });
      // if(loginAction) {
      //   // console.log('logged in: ', loginAction);
      //   handlePageRender('cart');
      // }

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form className="row col-3 100vh mx-auto align-items-center border mt-6 bg-light border-white-50 border-2 rounded  p-3" >
        <div>
            <h1 className="text-center">Create account</h1>
        </div>

        <div>
            
        </div>

        <div className="mb-2 text-start mt-2">
      <label className="form-label " ></label>
      <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder='Name' name="name" value={formState.name}  onChange={handleChange}/>
      
      
    </div>
    <div className="mb-2 text-start mt-2">
      <label className="form-label " ></label>
      <input type="email" className="form-control" id="signEmail" aria-describedby="emailHelp" placeholder='Email address' name="email" value={formState.email}  onChange={handleChange}/>
      
      
    </div>
    
    <div className="mb-2 text-start">
    <div id="emailHelp" className="form-text text-1 fs-7 ">Password must contain at least 1 upper case, numeric, and special character.</div>
      <label className="form-label"></label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' name="password" value={formState.password}  onChange={handleChange}/>
    </div>

    <div className="mb-2 form-check ">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">I agree all statements in Terms of service</label>
    </div>
    <button  onClick={signUp}  className="btn btn-dark w-100 ">Sign up</button>

    <div>
    <p className="text-center mt-2">Already have an account? <a href="/login">Sign in</a></p>
    </div>
  </form>
  );
}

export default Login;