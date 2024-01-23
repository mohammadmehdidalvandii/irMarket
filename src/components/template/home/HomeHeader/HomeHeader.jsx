import { NavLink } from 'react-router-dom'
import './HomeHeader.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function HomeHeader() {
  return (
 <section className="homeHeader">
    <div className="containers">
        <div className="row">

        <Swiper navigation={true} modules={[Navigation]} loop={true}
          rtl={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false
        }} 
        spaceBetween={50}
        >
        <SwiperSlide> 
                 <div className="col-12">
                <NavLink to='/' className='home_link_poster'>
                    <img src="/assets/poster/1.jpg" alt="" className="home_link_img" />
                </NavLink>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
                 <div className="col-12">
                <NavLink to='/' className='home_link_poster'>
                    <img src="/assets/poster/2.jpg" alt="" className="home_link_img" />
                </NavLink>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
                 <div className="col-12">
                <NavLink to='/' className='home_link_poster'>
                    <img src="/assets/poster/3.gif" alt="" className="home_link_img" />
                </NavLink>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
                 <div className="col-12">
                <NavLink to='/' className='home_link_poster'>
                    <img src="/assets/poster/4.jpg" alt="" className="home_link_img" />
                </NavLink>
            </div>
        </SwiperSlide>
      </Swiper>
       
        </div>
        <div className="row mt-2">
        <div className="col-12">
                <NavLink to='/' className='home_link_poster'>
                    <img src="/assets/poster/5.jpg" alt="" className="home_link_img" />
                </NavLink>
            </div>
        </div>
    </div>
 </section>
  )
}

export default HomeHeader