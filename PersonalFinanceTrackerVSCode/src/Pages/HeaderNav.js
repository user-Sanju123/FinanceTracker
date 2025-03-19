import React from "react";
import { Link,NavLink,useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const navigate=useNavigate();
  const SignOut=(e)=>{
    e.preventDefault();
    alert("Signout Successfully");
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="javascript:void(0)" to={"/dashboard"}>
            Finanace Tracker
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Link
                </a>
              </li>
              <li className="nav-item">
              <Link
                    className="btn btn-sm btn-danger"
                    onClick={SignOut}
                  >
                    Logout
                  </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
