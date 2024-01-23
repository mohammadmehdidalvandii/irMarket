import './ArticleCard.css'
import { NavLink } from 'react-router-dom'

function ArticleCard({image , title}) {
  return (
    <NavLink to='/' className='articleCard'>
    <img src={image} alt="article-image" className="articleCard_img" />
    <div className="articleCard_content">
        <h6 className="articleCard_title">{title}</h6>
    </div>
</NavLink>
  )
}

export default ArticleCard