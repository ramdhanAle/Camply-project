import AuthForm from "../../components/AuthForm";
import Input from "../../components/ui/form/input";
import GreenButton from "../../components/ui/button/GreenButton";
import Button from "../../components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

function Login() {
  const auth = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.loginAction(formData, () => {
      navigate(from, { replace: true }); // Redirect ke lokasi asal
    });
    setFormData({
      email: "",
      password: "",
    });
    return;
  };

  return (
    <>
      <AuthForm>
        <form onSubmit={handleSubmit}>
          {auth.isError && (
            <p style={{ color: "red" }}>{auth.isError.message}</p>
          )}
          <Input
            autoComplete="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            autoComplete="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <GreenButton $small type="submit" disabled={auth.isLoading}>
            {!!auth.isLoading ? "Signing in..." : "Log in"}
          </GreenButton>
          <div className="separator">
            <div className="hr"></div>
          </div>
          <Button $small type="button">
            &nbsp;Login with Google
          </Button>
          <Button $small type="button">
            &nbsp;Login with Facebook
          </Button>
          <Button $small type="button">
            &nbsp;Login with Apple
          </Button>
        </form>

        <Link to="/forgot-password">Forgot your password?</Link>
      </AuthForm>
    </>
  );
}

export default Login;
