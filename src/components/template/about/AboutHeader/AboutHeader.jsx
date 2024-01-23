import './AboutHeader.css';

function AboutHeader() {
  return (
    <section className="aboutHeader">
        <div className="containers">
            <div className="contentBox">
                <div className="aboutHeader_wrapper">
                    <img src="/assets/images/about.jpg" alt="about image" className="aboutHeader_img" />
                    <div className="aboutHeader_content">
                    <h1 className="aboutHeader_title">ایران مارکت تقدیم می کند</h1>
                    <p className="aboutHeader_desc">به شرکت مهندسی و فروشگاهی ایران مارکت خوش آمدید</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutHeader