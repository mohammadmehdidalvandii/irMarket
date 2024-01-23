import { useState } from 'react';
import './Accordion.css';
import {IoIosArrowDown , IoIosArrowUp} from 'react-icons/io'

function Accordion() {
    const [isAccordion , setIsAccordion] =useState(false)
    const handlerShowDesc = ()=>{
        setIsAccordion(!isAccordion)
    }
  return (
    <div className="accordion" onClick={handlerShowDesc}>
    <div className="accordion_titleIcon">
    <h5 className="accordion_title">چطور سفارشمون رو تایید کنیم؟</h5>
    {isAccordion ?(
        <IoIosArrowUp className='accordion_icon'/>
    ):(
        <IoIosArrowDown className='accordion_icon'/>
    )}
    </div>
    <p className="accordion_desc" style={{display: isAccordion ?"block" : "none"}}>با تسویه کردن سبد خرید، سفارش به صورت خودکار تایید میشه.ونیاز به کار خاصی از طرف شما یا ما نیست.</p>
</div>
  )
}

export default Accordion