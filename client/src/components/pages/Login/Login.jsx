import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <form class="row col-3 mx-auto align-items-center border mt-6 bg-light border-white-50 border-2 rounded  p-3">
    <div class="mb-3 text-start mt-2">
      <label for="exampleInputEmail1" class="form-label ">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text text-1 fs-7 ">We'll never share your email with anyone else.</div>
      
    </div>
    
    <div class="mb-3 mt-3 text-start">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>

    <div class="mb-3 form-check ">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Remember me</label>
    </div>
    <button type="submit" class="btn btn-dark w-100 ">Sign in</button>

    <div>
      <p class="text-center mt-3">Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  </form>
  );
}

export default Login;