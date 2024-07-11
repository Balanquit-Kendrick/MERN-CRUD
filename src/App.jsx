import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={}></Route>
          <Route path='/create' element={}></Route>
          <Route path='/update' element={}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
