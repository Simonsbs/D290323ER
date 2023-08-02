import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import Protected from "./Protected";

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/users"
          element={
            <Protected>
              <h1>User List</h1>
            </Protected>
          }
        />
        <Route
          path="/add-user"
          element={
            <Protected>
              <h1>Add User</h1>
            </Protected>
          }
        />
        <Route
          path="/edit-user"
          element={
            <Protected>
              <h1>Edit User</h1>
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;
