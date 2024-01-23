import './HomeCredit.css';

function HomeCredit() {
  return (
    <section className="homeCredit">
        <div className="containers">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="homeCredit_item">
                        <img src="/assets/images/c1.svg" alt="credit image" className="homeCredit_img" />
                        <span className="homeCredit_text">پرداخت درب منزل</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="homeCredit_item">
                        <img src="/assets/images/c2.svg" alt="credit image" className="homeCredit_img" />
                        <span className="homeCredit_text">ضمانت بازگشت کالا</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="homeCredit_item">
                        <img src="/assets/images/c3.svg" alt="credit image" className="homeCredit_img" />
                        <span className="homeCredit_text">تحویل سریع</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="homeCredit_item">
                        <img src="/assets/images/c4.svg" alt="credit image" className="homeCredit_img" />
                        <span className="homeCredit_text">ضمانت اصل بودن</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeCredit