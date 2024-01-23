
import { NavLink } from 'react-router-dom';
import Title from '../../../module/Title/Title';
import WeblogCard from '../../../module/WeblogCard/WeblogCard';
import './Articles.css';

function Articles() {
  return (
   <section className="articles">
    <div className="containers">
        <div className="contentBox">
            <div className="row">
                <div className="col-12">
                    <Title title='مقالات'/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-9 col-md-6 col-sm-12">
                    <WeblogCard/>
                    <WeblogCard/>
                    <WeblogCard/>
                    <WeblogCard/>
                    <WeblogCard/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="article_new">
                        <ul className="article_items">
                            <li className="article_item">
                                <NavLink to='/' className='article_item_link'>
                                    <img src="/assets/images/web.jpg" alt="" className="article_item_img" />
                                    <span className="article_item_title">معرفی لپ تاپ wat32</span>
                                </NavLink>
                            </li>
                            <li className="article_item">
                                <NavLink to='/' className='article_item_link'>
                                    <img src="/assets/images/web.jpg" alt="" className="article_item_img" />
                                    <span className="article_item_title">معرفی لپ تاپ wat32</span>
                                </NavLink>
                            </li>
                            <li className="article_item">
                                <NavLink to='/' className='article_item_link'>
                                    <img src="/assets/images/web.jpg" alt="" className="article_item_img" />
                                    <span className="article_item_title">معرفی لپ تاپ wat32</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Articles