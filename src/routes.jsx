import Home from "./page/Home/Home";
import About from "./page/About/About";
import Weblog from "./page/Weblog/Weblog";
import Login  from "./page/Login/Login";
import Register from "./page/Register/Register";
import Basket from "./page/Basket/Basket";
import Products from "./page/Products/Products";
import ProductDetails from "./page/ProductDetails/ProductDetails";
import  Questions from './page/Questions/Questions'
import Profile from "./page/Profile/Profile";
import Search from "./page/Search/Search";
const routes = [
    {path:'/' , element : <Home/>},
    {path:'/About' , element : <About/>},
    {path:'/Weblog' , element : <Weblog/>},
    {path:'/Login' , element : <Login/>},
    {path:'/Register' , element : <Register/>},
    {path:'/Basket' , element : <Basket/>},
    {path:'/Products' , element : <Products/>},
    {path:'/P-details/:id' , element : <ProductDetails/>},
    {path:'/Qus' , element : <Questions/>},
    {path:'/Profile' , element : <Profile/>},
    {path:'/Search/:value' , element : <Search/>},
]


export default routes