import { useContext, useEffect, useState } from "react"
import Title from "../../components/module/Title/Title"
import { useParams } from "react-router-dom"
import productContext from "../../context/productContext"
import ProductCard from "../../components/module/ProductCard/ProductCard"

function Search() {
    const [allProduct , setAllProduct] =useState([])
    const {value} =useParams()
    const productData = useContext(productContext)
    useEffect(()=>{
        const products = productData.products.filter(product=> product.name.includes(value))
        setAllProduct(products)
    },[value, productData.products])

  return (
    <section className="search mt-3 mb-3">
        <div className="containers">
            <div className="contentBox">
                <div className="row">
                    <div className="col-12">
                    <Title title='نتیجه جستجو شما !'/>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        allProduct.length === 0 ? (
                            <h4 className="search_textError">نتیجه جستجو شما نا موفق بود </h4>
                        ) :(
                            allProduct.map(product => (
                    <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12" key={product.id}>
                        <ProductCard {...product} price={product.price.toLocaleString()}/>
                    </div>
                            ))
                        )
                    }
                </div>

            </div>
        </div>
    </section>
  )
}

export default Search