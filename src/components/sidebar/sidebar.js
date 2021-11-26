import React from "react";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div style={{ display: "flex", flexWrap: "nowrap", backgroundColor: "#2B2F3A" }}>
        <div style={{ paddingBottom: "5px" }} ><img src="img/hse.png" style={{ paddingTop: "5px", paddingLeft: "35px", width: "67px", height: "32px", border: "none" }} /></div>
        <div style={{ paddingBottom: "5px" }}><img src="img/miem-logo.svg" style={{ paddingTop: "5px", paddingLeft: "20px", width: "120px", height: "32px", border: "none" }} /></div>
      </div>
      <div class="list-unstyled components">
        <button class="btn " data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" ><span>Сетевое устройство</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <div class="collapse" id="collapseExample1">
          <div class="card-body" >
            <li class="active">
              <button class="btn b1" data-bs-toggle="collapse.show" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1"  >  Устройство
              </button>
              <button class="btn b1" data-bs-toggle="collapse.show" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" >  Выбрать устройство
              </button>
            </li>
          </div>
        </div>
        <button class="btn" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
          <span>Выбрать лр</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <div class="collapse" id="collapseExample2">
          <div class="card-body" >
            <li class="active">
              <button class="btn b1" data-bs-toggle="collapse.show" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" >  ЛР №1
              </button>
              <button class="btn b1" data-bs-toggle="collapse.show" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" >  Выбрать ЛР
              </button>
            </li>

          </div>
        </div>
        <button class="btn" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
          <span>Пользователи лобби</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <div class="collapse" id="collapseExample3">
          <div class=" card-body" >
            <li class="active ">
              <button class="btn b1" data-bs-toggle="collapse.show" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" >  Пользователь 1
              </button>
              <button class="btn b1" data-bs-toggle="collapse.show" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" > Пользователь 2
              </button>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}

//const b = document.querySelector(".btn")



export default Sidebar
