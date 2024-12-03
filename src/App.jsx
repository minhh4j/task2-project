import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './component/home'
import Login from './component/login'
import SingUp from './component/singUp'
import Cart from './component/cart'
import Context from './component/Context'
function App() {
  return (
    <Router>
      <Context>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SingUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Context>
    </Router>
  )
}

export default App