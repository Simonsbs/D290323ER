import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />;
}

export default Protected;
