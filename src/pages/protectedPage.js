import { fakeAuth } from "../components/FakeAuth";
import { useNavigate } from "react-router-dom";

// Props are objects that contain data that is passed to child components.
// In this case, x is a prop that is passed to the ProtectedPage component from the parent component.
const ProtectedPage = ({ x }) => {
  const navigate = useNavigate();

  return (
    <div>
      <p>You are identified. Welcome to the secure page. Value of x is {x}</p>

      <button
        onClick={() => {
          fakeAuth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/protected" } } })
          );
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProtectedPage;
