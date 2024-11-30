import { Outlet, NavLink } from "react-router";

function App() {
  return (
    <>
      <div className="flex flex-row gap-x-4 mb-4 p-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/api-docs">API Docs</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <Outlet />
    </>
  );
}

export default App;
