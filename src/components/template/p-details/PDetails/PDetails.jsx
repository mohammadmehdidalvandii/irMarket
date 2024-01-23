import "./PDetails.css";
import { useState, useContext } from "react";
import PAbout from "../PAbout/PAbout";
import PCheck from "../pCheck/pCheck";
import PInfo from "../PInfo/PInfo";
import PComment from "../PComment/PComment";
import productContext from "../../../../context/productContext";
import { useParams } from "react-router-dom";
import {FaHeart} from 'react-icons/fa6'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PDetails() {
  const productData = useContext(productContext);

  // useState menuBtn
  const [menuBtn, setMenuBtn] = useState("about");

  // onClick menuBtn
  const handlerMenuButton = (menuBtnID) => {
    setMenuBtn(menuBtnID);
  };

  // Get details product by id
  const { id } = useParams();
  const foundProduct = productData.products.find(
    (product) => product.id == parseInt(id)
  );

  // Start add to Basket Product
  const addProductToBasket = () => {
    const isInProductBasket = productData.userBasket.some(
      (basketProduct) =>
        basketProduct.name === foundProduct.name &&
        basketProduct.price === foundProduct.price
    );
    if (isInProductBasket) {
      toast.error("محصول در سبد خرید  هست");
    } else {
      let newUserBasket = {
        id: foundProduct.id,
        name: foundProduct.name,
        image: foundProduct.image,
        price: foundProduct.price,
        count: foundProduct.count,
      };
      productData.setUserBasket((prevBasket) => [...prevBasket, newUserBasket]);
      toast.success("محصول به سبد خرید اضافه شد");
    }
  };
   // End add to Basket Product

    // Start add to favorite Product
  const handlerButtonAddFavorite = ()=>{
    const isInProductFavorite = productData.userFavorite.some(favorite => favorite.name === foundProduct.name &&   favorite.id === foundProduct.id)

    if(isInProductFavorite){
      toast.error("محصول علاقه مندی وجود دارد ❤");
    } else{  
    let newUserFavorite = {
      id: foundProduct.id,
      name: foundProduct.name,
      image : foundProduct.image,
      price : foundProduct.price,
    };
    productData.setUserFavorite((prevFavorite)=>[...prevFavorite , newUserFavorite])
    toast.success("محصول اضافه شد در پروفایل مشاهده کنید");
    }
  }
    // End add to favorite Product



  return (
    <section className="productDetails">
      <div className="containers">
        <div className="contentBox">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <img
                src={foundProduct.image}
                alt="product details"
                className="productDetails_img"
              />
            </div>
            <div className="col-xl-9 col-lg-8c col-md-6 col-sm-12">
              <div className="productDetails_content">
                <div className="productDetails_content_top">
                  <h5 className="productDetails_name">{foundProduct.name}</h5>
                  <span className="productDetails_miniInfo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
                <button className="productDetails_btnFavorite" onClick={handlerButtonAddFavorite}>
                 <FaHeart/>
                 <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={true}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      />
                </button>
                <div className="productDetails_content_down">
                  <ul className="productDetails_items">
                    <li className="productDetails_item">
                      <h6 className="productDetails_item_title">
                        ویژگی های محصول:
                      </h6>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="productDetails_item">
                      <span className="productDetails_item_text">
                        Lorem ipsum dolor sit.
                      </span>
                    </li>
                  </ul>
                  <div className="productDetails_buy">
                    <ul className="productDetails_buy_items">
                      <li className="productDetails_buy_item">
                        <span className="productDetails_buy_title">
                          گارانتی:
                        </span>
                        <span className="productDetails_buy_text">
                          6 ماهه تمام
                        </span>
                      </li>
                      <li className="productDetails_buy_item">
                        <span className="productDetails_buy_title">
                          موجود در انبار:
                        </span>
                        <span className="productDetails_buy_text">
                          {foundProduct.inCould} عدد
                        </span>
                      </li>
                      <li className="productDetails_buy_item">
                        <span className="productDetails_buy_title">قیمت:</span>
                        <span className="productDetails_buy_text">
                          {foundProduct.price.toLocaleString()} تومان
                        </span>
                      </li>
                    </ul>
                    <button
                      className="productDetails_addBasket"
                      onClick={addProductToBasket}
                    >
                      اضافه کردن به سبد خرید
                      <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={true}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div className="productDetails_buttons">
                <button
                  className={`productDetails_btnMenu ${
                    menuBtn === "about" ? "productDetails_btnMenu_Active" : ""
                  }`}
                  onClick={() => handlerMenuButton("about")}
                >
                  درباره محصول
                </button>
                <button
                  className={`productDetails_btnMenu ${
                    menuBtn === "check" ? "productDetails_btnMenu_Active" : ""
                  }`}
                  onClick={() => handlerMenuButton("check")}
                >
                  برسی تخصصی
                </button>
                <button
                  className={`productDetails_btnMenu ${
                    menuBtn === "info" ? "productDetails_btnMenu_Active" : ""
                  }`}
                  onClick={() => handlerMenuButton("info")}
                >
                  مشخصات
                </button>
                <button
                  className={`productDetails_btnMenu ${
                    menuBtn === "comment" ? "productDetails_btnMenu_Active" : ""
                  }`}
                  onClick={() => handlerMenuButton("comment")}
                >
                  دیدگاه
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {menuBtn === "about" && <PAbout />}
            {menuBtn === "check" && <PCheck />}
            {menuBtn === "info" && <PInfo />}
            {menuBtn === "comment" && <PComment />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PDetails;
