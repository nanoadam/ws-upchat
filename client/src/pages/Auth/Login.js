import React, { useContext } from "react";
import authContext from "../../context/auth/AuthContext";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // AuthContext.login(e.target[0].value, e.target[1].value);
  };
  return (
    <div>
      <div className="row">
        <div className="card col-md-4 mx-auto mt-4">
          <div className="card-body">
            <h2 className="text-center">Login</h2>
            <form onSubmit={onSubmit}>
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
