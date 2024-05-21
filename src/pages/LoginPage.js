import { useNavigate, useLocation } from "react-router-dom";
import { fakeAuth } from "../components/FakeAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    fakeAuth.login(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>You must log in to view the page at {from}</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginPage;
