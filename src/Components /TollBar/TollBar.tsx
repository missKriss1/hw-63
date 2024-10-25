import { NavLink } from "react-router-dom";

const TollBar = () => {
  return (
    <>
      <ul className="d-flex list-unstyled mt-4">
        <li className="me-3">
          <NavLink className="text-decoration-none text-black" to="/">
            Home
          </NavLink>
        </li>
        <li className="me-3">
          <NavLink className="text-decoration-none text-black" to="/post/add">
            Add
          </NavLink>
        </li>
        <li className="me-3">
          <NavLink className="text-decoration-none text-black" to="/about">
            About us
          </NavLink>
        </li>
        <li className="me-3">
          <NavLink className="text-decoration-none text-black" to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default TollBar;
