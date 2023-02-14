import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
    return (
        <form class="row col-3 100vh mx-auto align-items-center border mt-6 bg-light border-white-50 border-2 rounded  p-3" >
            <div>
                <h1 class="text-center">Create account</h1>
            </div>

            <div>

            </div>

            <div class="mb-2 text-start mt-2">
                <label class="form-label " ></label>
                <input type="email" class="form-control" id="signEmail" aria-describedby="emailHelp" placeholder='Enter name' />
            </div>

            <div class="mb-2 text-start mt-2">
                <label class="form-label " ></label>
                <input type="email" class="form-control" id="signEmail" aria-describedby="emailHelp" placeholder='Enter email address' />
            </div>

            <div class=" text-start">
                <div id="emailHelp" class="form-text text-1 fs-7 ">Password must contain at least 1 upper case, numeric, and special character.</div>
                <label class="form-label"></label>
                <input type="password" class="form-control" id="signPassword" placeholder='Enter password' />
            </div>

            <div class="mb-2 text-start">
                <label class="form-label"></label>
                <input type="password" class="form-control" id="signReenterPassword" placeholder='Re-enter password' />
            </div>

            <div class="mb-2 form-check ">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">I agree all statements in Terms of service</label>
            </div>
            <button type="submit" class="btn btn-dark w-100 ">Sign up</button>

            <div>
                <p class="text-center mt-2">Already have an account? <a href="/login">Sign in</a></p>
            </div>
        </form>
    );
}

export default SignUp;