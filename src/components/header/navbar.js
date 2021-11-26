import React from "react";

const Navbar = () => {
  return (
    <header class="navbar navbar-default">
      <div class="container-fluid">
        <button type="button3" id="sidebarCollapse1" class="btn" style={{ color: "#000000", backgroundColor: "#fff" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div class="btn-group" >
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#000000", backgroundColor: "#fff", borderColor: "#fff" }}>
            User1
          </button>
          <ul class="dropdown-menu dropdown-menu-end" >
            <li><a class="dropdown-item" href="#">Мой профиль</a></li>
            <li><a class="dropdown-item" href="#">Выйти</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar