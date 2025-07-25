import React from 'react';
import { Link } from 'react-router';
export default function Navbar(props) {
  
  return (
    <nav className={`navbar bg-${props.mode} border-bottom border-body`} data-bs-theme={props.mode}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextIFY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>
          <div className="form-check form-switch ms-3">
            <input className="form-check-input custom-switch" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="switchCheckDefault" style={{ color: "red" }}>Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
