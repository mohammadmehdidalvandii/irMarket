import { NavLink } from 'react-router-dom';
import './Baskets.css';
import {CiCirclePlus, CiCircleMinus} from 'react-icons/ci'
import productContext from '../../../../context/productContext';
import { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';


function Baskets() {
  // context api
  const productData = useContext(productContext)

  const [ProductCount , setProductCount] =useState(productData.userBasket.map(product=>product.count))
  const [totalPrice  , setTotalPrice] = useState(0)

// Start logic remove product Basket
const handlerRemoveProduct = (productID)=>{
  let newBasketUser = productData.userBasket.filter(product => product.id !== productID)
    productData.setUserBasket(newBasketUser)
    swal({title:"محصول حذف  شد", icon:'success' ,buttons:"✔"})
}
// End logic remove product Basket

// Start logic productCount for Basket
const handlerButtonPlus = (index)=>{
  let newCounts = [...ProductCount]
  newCounts[index] = newCounts[index] +1
  setProductCount(newCounts)
}
const handlerButtonMinus = (index)=>{
let newCounts = [...ProductCount]
if(newCounts[index] === 1){
  newCounts[index] = +newCounts[index]
}else{
  newCounts[index] = newCounts[index] -1
}
setProductCount(newCounts)
}
// End logic productCount for Basket

// Start calculateTotalPrice all Basket
const calculateTotalPrice =()=>{
  let sum = 0;
  productData.userBasket.forEach((product , index)=>{
    sum +=product.price * ProductCount[index]
  })
  setTotalPrice(sum)
}

useEffect(()=>{
  calculateTotalPrice()
},[productData.userBasket.length , ProductCount])
// End calculateTotalPrice all Basket

  return (
    <section className="baskets">
        <div className="containers">
            <div className="contentBox">
            {productData.userBasket.length === 0 ?(
                <h2 className="basket_null">سبد خرید خالی است</h2>
            ):(
              productData.userBasket.map((productBasket , index) => (
                <div className="basket_card mb-2" key={productBasket.id}>
                    <ul className="basket_card_items" >
                        <li className="basket_card_item">
                        <img src={productBasket.image} alt="" className="basket_card_img" />    
                        </li> 
                        <li className="basket_card_item">
                          <span className="basket_card_name">{productBasket.name}</span>  
                        </li> 
                        <li className="basket_card_item">
                          <div className="basket_card_count">
                            <button className="basket_card_countPlus  basket_card_countBtn"
                              onClick={()=>handlerButtonPlus(index)}
                            >
                              <CiCirclePlus/>
                            </button>
                            <span className="basket_card_countNum">{ProductCount[index]}</span>  
                            <button className="basket_card_countMinus  basket_card_countBtn"
                              onClick={()=>handlerButtonMinus(index)}
                            >
                            <CiCircleMinus/>  
                            </button>  
                          </div>  
                        </li> 
                        <li className="basket_card_item">
                          <span className="basket_card_price">{(productBasket.price * ProductCount[index]).toLocaleString()} تومان</span>
                          </li> 
                        <li className="basket_card_item">
                          <button className="basket_card_delete" onClick={()=>handlerRemoveProduct(productBasket.id)}>
                            حذف
                            </button>  
                        </li> 
                   </ul>
                </div>
                  ))
            )}
                        
                <div className="basket_card_bill">
                    <ul className="basket_card_billItems">
                      {/* <li className="basket_card_billItem">
                        <span className="basket_card_billTitle">قیمت کل :</span>
                        <span className="basket_card_billNum">12,000,000 تومان</span>
                      </li> */}
                      <li className="basket_card_billItem">
                        <span className="basket_card_billTitle">مجموع خرید :</span>
                        <span className="basket_card_billNum">{totalPrice.toLocaleString()} تومان</span>
                      </li>
                    </ul>

                      <NavLink to='/' className="basket_card_billBtn">تایید و پرداخت</NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Baskets