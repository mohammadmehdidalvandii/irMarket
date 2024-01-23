import './HomePopular.css';
import Link from '../../../module/Link/Link';
import Title from '../../../module/Title/Title';
import { useContext } from 'react';
import productContext from '../../../../context/productContext';
import ProductCard from '../../../module/ProductCard/ProductCard';


function HomePopular() {
    const productData = useContext(productContext)
  return (
    <section className="homePopular">
        <div className="containers">
            <div className="contentBox">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Title title='محبوب ترین محصولات'/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Link/>
                    </div>
                </div>
                <div className="row mt-5">
                    {productData.products.slice(12,18).map(product=>(
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
  )
}

export default HomePopular