import { NavLink } from "react-router-dom";
import "./Footer.css";
import {FaInstagram, FaTelegram , FaWhatsapp} from 'react-icons/fa'

function Footer() {
  return (
    <section className="footer">
      <div className="containers">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer_content">
              <img
                src="/assets/images/logo.png"
                alt="logo footer"
                className="footer_logo"
              />
              <h4 className="footer_title">فروشگاه اینترنتی ایران مارکت</h4>
              <p className="footer_description">
                ایران مارکت به عنوان یکی از بروزترین فروشگاه های اینترنتی با بیش
                از هفت سال تجربه، با پایبندی به اعتماد مشتری، موفق شده تا با
                فروشگاه‌های معتبر ایران به یکی از بزرگ‌ترین فروشگاه اینترنتی
                کشور تبدیل شود. هر آنچه که فکرش را بکنید و به ذهن شما خطور
                می‌کند در اینجا پیدا خواهید کرد.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul className="footer_items">
                <li className="footer_item">
                    <h4 className="footer_title">لینک های مفید:</h4>
                </li>
                <li className="footer_item">
                    <NavLink to='/' className='footer_item_link'>خانه</NavLink>
                </li>
                <li className="footer_item">
                    <NavLink to='/About' className='footer_item_link'>درباره ما</NavLink>
                </li>
                <li className="footer_item">
                    <NavLink to='/' className='footer_item_link'>پیگیری سفارش</NavLink>
                </li>
                <li className="footer_item">
                    <NavLink to='/Qus' className='footer_item_link'>سوالات متداول</NavLink>
                </li>
                <li className="footer_item">
                    <NavLink to='/Weblog' className='footer_item_link'>بلاگ</NavLink>
                </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul className="footer_items">
                <li className="footer_item">
                    <h6 className="footer_title">ارتباط با ما:</h6>
                </li>
                <li className="footer_item">
                    <span className="footer_item_text">آدرس: تهران،خیابان دماوند</span>
                </li>
                <li className="footer_item">
                  <span className="footer_item_text">تلفن:09111111111</span>
                </li>
                <li className="footer_item">
                   <span className="footer_item_text">ساعت پاسخگویی:9 الی 18</span>
                </li>
                <li className="footer_item">
                
                </li>
                <li className="footer_item">
                   
                </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer_media">
                <h6 className="footer_title">شبکه های اجتماعی:</h6>
                <div className="footer_mediaLinks">
                    <NavLink to='/' className='footer_mediaLink_icon'>
                        <FaInstagram/>
                    </NavLink>
                    <NavLink to='/' className='footer_mediaLink_icon'>
                        <FaTelegram/>
                    </NavLink>
                    <NavLink to='/' className='footer_mediaLink_icon'>
                        <FaWhatsapp/>
                    </NavLink>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
