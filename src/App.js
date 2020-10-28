import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Photos from './pages/Photos'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/eCommerceApp"><Photos /></Route>
            <Route path="/eCommerceApp/cart"><Cart /></Route>
          </Switch>
        </Router>
    </div>
  )
}

export default App

