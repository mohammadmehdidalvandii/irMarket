import './Link.css';
import { NavLink } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'

function Link() {
  return (
    <NavLink to='/' className='link'> 
    <span className="link_text">دیدن همه</span>
    <span className="link_icon"><FaArrowLeft/></span>
    </NavLink>
  )
}

export default Link