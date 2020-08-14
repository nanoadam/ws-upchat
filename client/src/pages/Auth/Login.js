import React from 'react';
import { login } from '../../actions/auth';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(e.target[0].value, e.target[1].value));
  };
  return (
    <div>
      <div className="row">
        <div className="card bg-light text-dark col-md-4 mx-auto mt-4">
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
              <input
                type="submit"
                className="btn btn-primary btn-block"
                title="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
