import { BrowserRouter, Route, Routes } from "react-router-dom";

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Login</h1>} />
        <Route path="/users" element={<h1>User List</h1>} />
        <Route path="/add-user" element={<h1>Add User</h1>} />
        <Route path="/edit-user" element={<h1>Edit User</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;
