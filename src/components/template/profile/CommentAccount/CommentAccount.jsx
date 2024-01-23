import './CommentAccount.css';

function CommentAccount() {
  return (
    <section className="commentAccount">
        <div className="row">
            <div className="col-12">
                <h6 className="account_title">نظرات من </h6>
            </div>

            <div className="col-12">
                <div className="commentProduct">
                    <img src="/assets/images/p1.jpg" alt="comment-image" className="commentProduct_img" />
                    <div className="commentProduct_textTile">
                        <h6 className="commentProduct_title">نظر:</h6>
                        <span className="commentProduct_text">	کیفیت بینظیر حتما پیشنهاد میکنم</span>
                    </div>
                    <div className="commentProduct_textTile">
                        <h6 className="commentProduct_title">وضعیت :</h6>
                        <span className="commentProduct_text">تایید شد</span>
                    </div>
                    <button className="commentProduct_btnDelete">حذف</button>
                </div>
                <div className="commentProduct">
                    <img src="/assets/images/p1.jpg" alt="comment-image" className="commentProduct_img" />
                    <div className="commentProduct_textTile">
                        <h6 className="commentProduct_title">نظر:</h6>
                        <span className="commentProduct_text">	کیفیت بینظیر حتما پیشنهاد میکنم</span>
                    </div>
                    <div className="commentProduct_textTile">
                        <h6 className="commentProduct_title">وضعیت :</h6>
                        <span className="commentProduct_text">تایید شد</span>
                    </div>
                    <button className="commentProduct_btnDelete">حذف</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CommentAccount