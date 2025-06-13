import AuthForm from "../../components/AuthForm";
import Input from "../../components/ui/form/input";
import GreenButton from "../../components/ui/button/GreenButton";
import Button from "../../components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../_services/auth";
import { useAuth } from "../../Context/AuthContext";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const auth = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await register(formData);
      auth.setIsError(null);
      navigate("/login");
    } catch (error) {
      setErrors(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthForm>
        <form onSubmit={handleSubmit}>
          <Input
            autoComplete="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {!!errors?.name &&
            errors.name.map((error, i) => <p key={i}>{error}</p>)}
          <Input
            autoComplete="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {!!errors?.email &&
            errors.email.map((error, i) => <p key={i}>{error}</p>)}
          <Input
            autoComplete="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {!!errors?.password &&
            errors.password.map((error, i) => <p key={i}>{error}</p>)}
          <GreenButton $small type="submit" disabled={isLoading}>
            {!!isLoading ? "Signin up..." : "Sign up"}
          </GreenButton>
          <div className="separator">
            <div className="hr"></div>
          </div>
          <Button $small type="button">
            &nbsp;Sign up with Google
          </Button>
          <Button $small type="button">
            &nbsp;Sign up with Facebook
          </Button>
          <Button $small type="button">
            &nbsp;Sign up with Apple
          </Button>
        </form>
      </AuthForm>
    </>
  );
}

export default Register;
