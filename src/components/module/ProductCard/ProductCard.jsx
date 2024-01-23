import './ProductCard.css'
import { NavLink } from 'react-router-dom';

function ProductCard({image , name , price ,id}) {
  return (
    <NavLink to={`/P-details/${id}`} className='productCard'>
    <img src={image} alt="product image" className="productCard_img" />
    <div className="productCard_content">
        <h6 className="productCard_name">{name}</h6>
        <span className="productCard_price">{price} تومان</span>
    </div>
</NavLink>
  )
}

export default ProductCard