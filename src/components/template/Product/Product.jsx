import Title from "../../module/Title/Title";
import "./Product.css";
import { useContext, useState } from "react";
import productContext from "../../../context/productContext";
import ProductCard from "../../module/ProductCard/ProductCard";
function Product() {
  const productData = useContext(productContext);
  const [allProduct ,setAllProduct] = useState(false)

  const handlerShowAllProduct = ()=>{
     setAllProduct(true)
  }
  return (
    <section className="product">
      <div className="containers">
        <div className="contentBox">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="product_title">
                <Title title="محصولات" />
              </div>
              <div className="product_grouping">
                <select className="product_grouping_items">
                  <option className="product_grouping_item" value="">
                    همه محصولات
                  </option>
                  <option className="product_grouping_item" value="">
                    آرایشی{" "}
                  </option>
                  <option className="product_grouping_item" value="">
                    بهداشتی
                  </option>
                  <option className="product_grouping_item" value="">
                    خوراکی{" "}
                  </option>
                  <option className="product_grouping_item" value="">
                    پوشاک
                  </option>
                  <option className="product_grouping_item" value="">
                    دیجیتال
                  </option>
                </select>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className="row">
                    {
                        allProduct ?(
                            productData.products.map(product=>(
                                <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                                <ProductCard
                                  {...product}
                                  price={product.price.toLocaleString()}
                                />
                              </div>
                            ))
                        ):(
                            productData.products.slice(0 , 9).map(product=>(
                                <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                                <ProductCard
                                  {...product}
                                  price={product.price.toLocaleString()}
                                />
                              </div>
                            ))
                        )
                    }


                {/* {productData.products.slice(0, 12).map((product) => (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                    <ProductCard
                      {...product}
                      price={product.price.toLocaleString()}
                    />
                  </div>
                ))} */}
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-">
                <button className="product_button"
                 onClick={handlerShowAllProduct}
                 style={{display :allProduct ? "none" :"block"}}
                 >مشاهده بیشتر</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
