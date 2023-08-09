import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import Protected from "./Protected";
import UserListPage from "./UserListPage";
import UserFormPage from "./UserFormPage";
import NavBar from "./NavBar";

function MyRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/users"
          element={
            <Protected>
              <h1>User List</h1>
              <UserListPage />
            </Protected>
          }
        />
        <Route
          path="/add-user"
          element={
            <Protected>
              <h1>Add User</h1>
              <UserFormPage />
            </Protected>
          }
        />
        <Route
          path="/edit-user/:id"
          element={
            <Protected>
              <h1>Edit User</h1>
              <UserFormPage />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;
