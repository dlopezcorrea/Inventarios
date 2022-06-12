import React from 'react'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Inventory</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Users</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Brands</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Status</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Type</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
