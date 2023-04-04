import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {
 

  return (
    <div className="App">
     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>

    </div>
  )
}

export default App
