import './FavoriteAccount.css';
import productContext from '../../../../context/productContext';
import { useContext } from 'react';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

function FavoriteAccount() {
    const productData = useContext(productContext)

// Start handlerRemoveProduct favorite
const handlerRemoveProduct = (productID)=>{
    const newUserFavorite = productData.userFavorite.filter(product => product.id !== productID)
    productData.setUserFavorite(newUserFavorite)
    swal({title:'محصول حذف شد' , icon: "success" , buttons:'✔'})
}
// End handlerRemoveProduct favorite

  return (
    <section className="favoriteAccount">
        <div className="favoriteAccount_wrapper">
            <h6 className="account_title">علاقه مندی</h6>
            <div className="row">
                <div className="col-12">
                    {
                        productData.userFavorite.map(favorite => (
                    <div className="favoriteProduct" key={favorite.id}>
                        <img src={favorite.image} alt="" className="favoriteProduct_img" />
                        <h6 className="favoriteProduct_name">{favorite.name}</h6>
                        <span className="favoriteProduct_price">{favorite.price} تومان</span>
                        <div className="favoriteProduct_buttons">
                            <button className="favoriteProduct_btn favoriteProduct_btnDelete" onClick={()=>handlerRemoveProduct(favorite.id)}>حذف</button>
                            <NavLink to={`/P-details/${favorite.id}`} className="favoriteProduct_btn favoriteProduct_btnSeen">مشاهده</NavLink>
                        </div>
                    </div>
                        ) )
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default FavoriteAccount