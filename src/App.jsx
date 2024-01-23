import { useRoutes } from "react-router-dom"
import routes from "./routes"
import TopBar from "./components/module/TopBar/TopBar"
import Navbar from "./components/module/Navbar/Navbar"
import productContext from "./context/productContext"
import db from './data/db.json'
import { useState } from "react"
import Footer from "./components/module/Footer/Footer"

function App() {
  const router = useRoutes(routes)
  const [products , setProducts] = useState([...db.products])
  const [userBasket , setUserBasket] = useState([])
  const [userFavorite , setUserFavorite] =useState([])
  return (
    <>
    <productContext.Provider 
      value={{
        products,
        setProducts,
        userBasket,
        setUserBasket,
        userFavorite,
      setUserFavorite,
      }}
    >
        <TopBar/>
        <Navbar/>
        {router}
        <Footer/>
    </productContext.Provider>
    </>
  )
}

export default App
