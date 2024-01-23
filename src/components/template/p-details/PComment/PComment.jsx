import './PComment.css';

function PComment() {
  return (
    <section className="pComment">
        <div className="row">
            <div className="col-12">
                <h6 className="productDetails_title">دیدگاه های محصول</h6>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12">
                <div className="pComment_content">
                    <span className="pComment_creator">امیر رضا کریمی  -  1402/8/12</span>
                    <span className="pComment_likeProduct">پیشنهاد شد</span>
                    <p className="pComment_text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PComment