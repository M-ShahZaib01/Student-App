import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand text-bold">Student App</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Student"
              aria-label="Search"
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
