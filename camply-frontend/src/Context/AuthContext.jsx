import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../_services/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("access_token") || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();

  async function loginAction({ email, password }, callback) {
    try {
      setIsLoading(true);
      const response = await login({ email, password });
      if (response.success) {
        setUser(response.user);
        setToken(response.token);
        localStorage.setItem("access_token", response.token);
        localStorage.setItem("user_info", JSON.stringify(response.user));
        setIsLoading(false);
        if (callback) callback();
        setIsError(null);
        return;
      }
      throw new Error(response.message);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setIsError(err.response?.data);
    }
  }

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_info");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loginAction,
        logOut,
        isLoading,
        setIsError,
        isError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
