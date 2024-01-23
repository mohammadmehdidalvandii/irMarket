import "./pCheck.css";

function PCheck() {
  return (
    <section className="pCheck">
      <div className="row">
        <div className="col-12">
          <h6 className="productDetails_title">بررسی تخصصی محصول</h6>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <p className="pCheck_desc">
            آیفون SE 2020 به عنوان جدید‌ترین گوشی هوشمند مقرون ‌به ‌صرفه این
            شرکت معرفی شده بود که در قسمت‌های کناری برخلاف پرچمداران خانواده
            آیفون 11 که فریمی منحنی شکل داشتند، فریم تخت داشت. این طراحی یادآور
            طراحی‌های قدیمی‌ این شرکت بود و حس نوستالژی را به کاربر منتقل
            می‌کرد. برای اولین بار، از این طراحی در گوشی‌های هوشمند خانواده
            آیفون 12 نیز استفاده شد که استقبال بی نظیر کاربران را به همراه داشت.
            همین امر سبب شد تا پرچمداران خانواده آیفون 13 نیز از این طراحی
            نوستالژی و جذاب بهره ببرند. در نگاه اولیه شاید طراحی در نظر گرفته
            شده برای آیفون 13 پرو تفاوت چندانی با آیفون 12 پرو نداشته باشد، اما
            اپل توانست با تغییرات هرچند اندک و تنوع رنگی جدید، ظاهری به مراتب
            جذاب‌تر و همه پسندتر به آن بدهد.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            <img src="/assets/images/p1.jpg" alt="pCheck-img" className="pCheck-img" />
        </div>
      </div>
    </section>
  );
}

export default PCheck;
