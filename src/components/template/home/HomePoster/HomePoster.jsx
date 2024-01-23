import { NavLink } from 'react-router-dom'
import './HomePoster.css'

function HomePoster() {
  return (
    <section className="homePoster">
        <div className="containers">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <NavLink to='/' className='homePoster_link'>
                        <img src="/assets/poster/6.jpg" alt="poster image" className="homePoster_link_img" />
                    </NavLink>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <NavLink to='/' className='homePoster_link'>
                        <img src="/assets/poster/7.jpg" alt="poster image" className="homePoster_link_img" />
                    </NavLink>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <NavLink to='/' className='homePoster_link'>
                        <img src="/assets/poster/8.jpg" alt="poster image" className="homePoster_link_img" />
                    </NavLink>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <NavLink to='/' className='homePoster_link'>
                        <img src="/assets/poster/9.jpg" alt="poster image" className="homePoster_link_img" />
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePoster