import { NavLink } from 'react-router-dom';
import './PosterDiscount.css';

function PosterDiscount() {
  return (
    <section className="posterDiscount">
        <div className="containers">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <NavLink to='/' className='posterDiscount_link'>
                            <img src="/assets/poster/10.jpg" alt="poster-discount" className="posterDiscount_img" />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <NavLink to='/' className='posterDiscount_link'>
                            <img src="/assets/poster/11.jpg" alt="poster-discount" className="posterDiscount_img" />
                        </NavLink>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default PosterDiscount