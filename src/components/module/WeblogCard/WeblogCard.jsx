import './WeblogCard.css';
import { NavLink } from 'react-router-dom';
function WeblogCard() {
  return (
    <NavLink to='/'  className="weblogCard">
    <img src="/assets/images/web.jpg" alt="weblog image" className="weblogCard_img" />
        <div className="weblogCard_content">
            <h4 className="weblogCard_title">لب تاپ جدید اپل</h4>
            <p className="weblogCard_paraph">در این مقاله سعی داریم مقایسه ای کوتاه و جذاب  میان دو پرچم دار قوی دنیای لپ تاپ های جدید انجام دهیم.</p>
            <span className="weblogCard_date_creator">امیررضا کریمی - 30 تیر 1402</span>
        </div>
</NavLink>
  )
}

export default WeblogCard