import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Inventory</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" exact aria-current="page" to="/">Active</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact aria-current="page" to="users">Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact aria-current="page" to="brands">Brands</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact aria-current="page" to="status">Status</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact aria-current="page" to="types">Type</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
