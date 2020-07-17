import React from "react";

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="card col-md-4 mx-auto mt-4">
          <div className="card-body">
            <h2 className="text-center">Login</h2>
            <form>
              <div className="form-group mb-3">
                <label>Email Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
              <input type="submit" className="btn btn-primary btn-block" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
