import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Header'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Toaster />
    </div>
  )
}

export default App
