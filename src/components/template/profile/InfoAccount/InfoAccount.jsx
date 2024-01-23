import './InfoAccount.css';

function InfoAccount() {
  return (
    <section className="infoAccount">
        <div className="row">
            <div className="col-12">
                <h6 className="account_title">تغییر اطلاعات حساب کابری</h6>
                <div className="infoAccount_wrapper">
                <div className="infoBox infoBox_wrapper">
                    <label  className="infoBox_label">نام :</label>
                    <input type="text" className='infoBox_input' />
                </div>
                <div className="infoBox infoBox_wrapper">
                    <label  className="infoBox_label">نام خانوادگی :</label>
                    <input type="text" className='infoBox_input' />
                </div>
                </div>
                <div className="infoAccount_wrapper">
                <div className="infoBox infoBox_wrapper">
                    <label  className="infoBox_label">شماره همراه :</label>
                    <input type="text" className='infoBox_input' />
                </div>
                <div className="infoBox infoBox_wrapper">
                    <label  className="infoBox_label">ایمیل :</label>
                    <input type="text" className='infoBox_input' />
                </div>
                </div>
                <div className="infoAccount_wrapper">
                <div className="infoBox infoBox_wrapper">
                    <label  className="infoBox_label">رمز عبور قبلی :</label>
                    <input type="text" className='infoBox_input' />
                </div>
                <div className="infoBox infoBox_wrapper">
                    <label  className="infoBox_label">رمزعبور جدید :</label>
                    <input type="text" className='infoBox_input' />
                </div>
                </div>
                <input type="file"/>
                <button className="infoAccount_btn">ذخیره</button>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-12">
                <h6 className="account_title">تغییر اطلاعات  آدرس</h6>
                <div className="infoBox">
                    <label  className="infoBox_label">آدرس جدید :</label>
                    <input type="text" className='infoBox_input' />
                </div>
                <div className="infoBox">
                    <label  className="infoBox_label">ایمیل :</label>
                    <input type="text" className='infoBox_input' />
                </div>
                <div className="infoBox">
                    <label  className="infoBox_label">کد پستی :</label>
                    <input type="text" className='infoBox_input' />
                </div>
                <div className="infoBox">
                    <label  className="infoBox_label">شماره همراه :</label>
                    <input type="text" className='infoBox_input' />
                </div>
              
              
                
                <button className="infoAccount_btn">ذخیره</button>
            </div>
        </div>
    </section>
    )
}

export default InfoAccount