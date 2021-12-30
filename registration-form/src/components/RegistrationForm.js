import { Link } from "react-router-dom";
import "./style.css";

const RegistrationForm = () => {
  return (
    <div className="register-screen">
      <form  className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
        <Link to="/welcome" style={{"color":"white"}}>
          Register
          </Link>
        </button>

        
      </form>
    </div>
  );
};

export default RegistrationForm;