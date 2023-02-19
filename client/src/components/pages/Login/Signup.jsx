import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <form class="row col-3 100vh mx-auto align-items-center border mt-6 bg-light border-white-50 border-2 rounded  p-3" >
        <div>
            <h1 class="text-center">Create account</h1>
        </div>

        <div>
            
        </div>
    <div class="mb-2 text-start mt-2">
      <label class="form-label " ></label>
      <input type="email" class="form-control" id="signEmail" aria-describedby="emailHelp" placeholder='Email address'/>
      
      
    </div>
    
    <div class="mb-2 text-start">
    <div id="emailHelp" class="form-text text-1 fs-7 ">Password must contain at least 1 upper case, numeric, and special character.</div>
      <label class="form-label"></label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/>
    </div>

    <div class="mb-2 form-check ">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">I agree all statements in Terms of service</label>
    </div>
    <button type="submit" class="btn btn-dark w-100 ">Sign in</button>

    <div>
    <p class="text-center mt-2">Already have an account? <a href="/login">Sign in</a></p>
    </div>
  </form>
  );
}

export default Login;