import './AddressAccount.css';

function AddressAccount() {
  return (
    <section className="addressAccount">
        <div className="row">
            <div className="col-12">
                <h6 className="account_title">آدرس های من </h6>
            </div>
            <div className="col-12">
                <div className="address">
                    <ul className="address_items">
                        <li className="address_item">
                    <h6 className="address_text">خراسان رضوی-مشهد-خیابان .....</h6>
                        </li>
                        <li className="address_item">
                            <span className="address_item_title">شماره تلفن همراه:</span>
                            <span className="address_item_text">09999999999</span>
                        </li>
                        <li className="address_item">
                            <span className="address_item_title">ایمیل:</span>
                            <span className="address_item_text">aaaaaaa@gmail.com</span>
                        </li>
                        <li className="address_item">
                            <span className="address_item_title">کد پستی:</span>
                            <span className="address_item_text">9889498984</span>
                        </li>
                        <li className="address_item">
                            <button className="address_btnDelete">حذف</button>
                        </li>
                    </ul>
                    <ul className="address_items">
                        <li className="address_item">
                    <h6 className="address_text">خراسان رضوی-مشهد-خیابان .....</h6>
                        </li>
                        <li className="address_item">
                            <span className="address_item_title">شماره تلفن همراه:</span>
                            <span className="address_item_text">09999999999</span>
                        </li>
                        <li className="address_item">
                            <span className="address_item_title">ایمیل:</span>
                            <span className="address_item_text">aaaaaaa@gmail.com</span>
                        </li>
                        <li className="address_item">
                            <span className="address_item_title">کد پستی:</span>
                            <span className="address_item_text">9889498984</span>
                        </li>
                        <li className="address_item">
                            <button className="address_btnDelete">حذف</button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </section>
  )
}

export default AddressAccount