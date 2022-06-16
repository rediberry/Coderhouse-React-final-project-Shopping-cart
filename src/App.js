import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, ItemListContainer, Sidebar, Footer } from './components'

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from './pages'

function App() {
  return (
    <Router>
      <Navbar/>
      <ItemListContainer greeting="Esto es una pruebaaaa"/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
        <Route exact path='/products'>
          <Products/>
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct/>}/>
        <Route exact path='/checkout'>
          <Checkout/>
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
