import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axios.config";
import AuthTokenManager from "../services/AuthTokenManager";
const Register = () => {
  const authManager = new AuthTokenManager();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  //handler
  const handleChange = (name) => (e) => {
    setFormValues({ ...formValues, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formValues.email || !formValues.password) {
      setError("All fields are required");
      return;
    }
    try {
      const response = await axiosInstance.post("/register", formValues);
      authManager.setToken(response.accessToken);
      if (authManager.getToken()) {
        navigate("/");
      }
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={formValues.email}
          onChange={handleChange("email")}
        />
        <input
          type="password"
          placeholder="Enter Your password"
          value={formValues.password}
          onChange={handleChange("password")}
        />
        <div className="btnContainer">
          <button>Register</button>
          {<p className="errMessage">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Register;
