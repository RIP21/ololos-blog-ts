import React from "react";
import {Link} from "react-router";

const Navigation = () => {
  return (
    <div className="blog-masthead">
      <div className="container">
        <nav className="blog-nav">
          <Link className="blog-nav-item" onlyActiveOnIndex activeClassName="active" to="/">Home Feed</Link>
          <Link className="blog-nav-item" activeClassName="active" to="/admin/posts">Post Management</Link>
        </nav>
      </div>
    </div>);

};


export default Navigation;
