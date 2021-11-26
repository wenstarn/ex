import React from "react";
import ReactConsole from '@webscopeio/react-console'
import { useState } from 'react'
const Console = () => {
  const [history, setHistory] = useState([
    "echo hello world",
    "sleep 1000",
    "sleep 2000",
    "sleep 3000",
    "echo ola",
    "not found",
  ])
  return (
    <div style={{ padding: "auto", height: "60vh" }}>
      <nav>
        <div class="nav nav-tabs" style={{ marginLeft: "2vw", marginRight: "2vw", height: "100%", flexWrap: "nowrap", overflowY: "hidden", overflowX: "auto" }} id="nav-tab" role="tablist">
          <button class="nav-link active" style={{ paddingLeft: "1%", paddingRight: "1%", color: "black" }} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Терминал1</button>
          <button class="nav-link" style={{ paddingLeft: "1%", paddingRight: "1%", color: "black" }} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Терминал2</button>
          <button class="nav-link" style={{ paddingLeft: "1%", paddingRight: "1%", color: "black" }} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Терминал3</button>
        </div>
      </nav>

      <ReactConsole
        autoFocus
        wrapperStyle={{ color: "black", fontSize: "1.5rem", marginLeft: "2vw", marginRight: "2vw", height: "100%", backgroundColor: "#DCDCDC" }}
        lineStyle={{ color: "black", lineHeight: "1.5", fontSize: "1.5rem" }}
        inputStyle={{ color: "black", fontSize: "1.5rem" }}
        welcomeMessage="Welcome"
        commands={{
          history: {
            description: 'History',
            fn: (...args) => new Promise(resolve => {
              console.log(args)
              resolve(`${history.join('\r\n')}`)
            })
          },
          echo: {
            description: 'Echo',
            fn: (...args) => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(`${args.join(' ')}`)
                }, 2000)
              })
            }
          },
          test: {
            description: 'Test',
            fn: (...args) => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve('Hello world \n\n hello \n')
                }, 2000)
              })
            }
          }
        }}
      />
      <div class="btn-group" role="group" style={{ marginLeft: "2vw", marginRight: "2vw" }} aria-label="Basic example">
        <button type="button" class="btn btn-secondary">Сохранить</button>
        <button type="button" class="btn btn-secondary">Выгрузить</button>
      </div>
    </div>
  )

}

export default Console