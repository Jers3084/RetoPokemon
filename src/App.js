import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Components/home/Home'
import { Inicio } from './Components/inicio/Inicio'
import Navbar from './Components/navbar/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
