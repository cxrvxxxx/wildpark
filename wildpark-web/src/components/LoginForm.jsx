import React from "react";

const LoginForm = () => {
    return (
        <form>
            <h4 className="mb-4"><b>Login</b></h4>
            <div class="form-group mb-3">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" />
            </div>
            <div class="form-group mb-3">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <div class="form-group mb-4">
                <input type="checkbox" id="remember" name="remember" />
                <label className="mx-2" for="remember">Remember me</label>
            </div>
            <div className="form-group mb-4">
                <button type="submit" class="btn btn-primary btn-block">Login</button>
            </div>
            <a className="d-inline" href="#">Don't have an account? Create one!</a>
        </form>
    );
}

export default LoginForm;