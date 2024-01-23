import "./HomeBest.css";
import Title from "../../../module/Title/Title";
import Link from "../../../module/Link/Link";
import ProductCard from "../../../module/ProductCard/ProductCard";
import productContext from "../../../../context/productContext";
import { useContext } from "react";

function HomeBest() {

    const productData = useContext(productContext)
  return (
    <section className="homeBest">
      <div className="containers">
        <div className="contentBox">
          <div className="row">
            <div className="col-lg-6">
              <Title title="بهترین کالا ها" />
            </div>
            <div className="col-lg-6">
              <Link />
            </div>
          </div>
          <div className="row mt-5">
            {productData.products.slice(6 , 12).map(product=>(
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12" key={product.id}>
                <ProductCard
                    {...product}
                    price={product.price.toLocaleString()}
                />
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBest;
