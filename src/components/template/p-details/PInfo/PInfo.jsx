import "./PInfo.css";

function PInfo() {
  return (
    <section className="pInfo">
      <div className="row">
        <div className="col-12">
          <h6 className="productDetails_title">مشخصات فنی محصول</h6>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ul className="pInfo_items">
            <li className="pInfo_item">
              <span className="pInfo_item_title">پردازنده:</span>
              <span className="pInfo_item_text">AM32x new product</span>
            </li>
            <li className="pInfo_item">
              <span className="pInfo_item_title">وزن:</span>
              <span className="pInfo_item_text">230 گرم</span>
            </li>
            <li className="pInfo_item">
              <span className="pInfo_item_title">نسخه وای فای:</span>
              <span className="pInfo_item_text">3prm new test</span>
            </li>
            <li className="pInfo_item">
              <span className="pInfo_item_title">پردازنده گرافیکی:</span>
              <span className="pInfo_item_text">Hiliston 7200</span>
            </li>
            <li className="pInfo_item">
              <span className="pInfo_item_title">دوربین عقب:</span>
              <span className="pInfo_item_text">24MP</span>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <ul className="pInfo_items">
            <li className="pInfo_item">
              <span className="pInfo_item_title">فرکانس پردازنده:</span>
              <span className="pInfo_item_text">32HR</span>
            </li>
            <li className="pInfo_item">
              <span className="pInfo_item_title">نسخه بلوتوث:</span>
              <span className="pInfo_item_text">7r</span>
            </li>
            <li className="pInfo_item">
              <span className="pInfo_item_title">سیستم عامل</span>
              <span className="pInfo_item_text">IOS</span>
            </li>
            <li className="pInfo_item">
              <span className="pInfo_item_title">دوربین جلو:</span>
              <span className="pInfo_item_text">12 MP</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PInfo;
