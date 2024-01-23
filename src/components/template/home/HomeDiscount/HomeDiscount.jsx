import './HomeDiscount.css';
import Title from '../../../module/Title/Title'
import Link from '../../../module/Link/Link';
import ProductCard from '../../../module/ProductCard/ProductCard'
import { useContext } from 'react';
import productContext from '../../../../context/productContext'

function HomeDiscount() {
    const productsDate = useContext(productContext)
  return (
    <section className="homeDiscount">
        <div className="containers">
            <div className="contentBox">
                    <div className="row ">
                        <div className="col-lg-6">
                            <Title title='پرتخفیف ترین ها' />
                        </div>
                        <div className="col-lg-6">
                            <Link/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {productsDate.products.slice(0,6).map(product=> (
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

export default HomeDiscount