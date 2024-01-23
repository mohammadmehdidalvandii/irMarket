import './ProfileAccount.css';

function ProfileAccount() {
  return (
   <section className="profileAccount">
    <div className="profileAccount_wrapper">
        <h6 className="account_title">اطلاعات شخصی</h6>
        <ul className="profileAccount_items">
            <li className="profileAccount_item">
                <span className="profileAccount_item_title">نام و نام خانوادگی:</span>
                <span className="profileAccount_item_text">امیرررر</span>
            </li>
            <li className="profileAccount_item">
                <span className="profileAccount_item_title">شماره تلفن همراه:</span>
                <span className="profileAccount_item_text">0999999999</span>
            </li>
            <li className="profileAccount_item">
                <span className="profileAccount_item_title">احراز هویت:</span>
                <span className="profileAccount_item_text">خیر</span>
            </li>
            <li className="profileAccount_item">
                <span className="profileAccount_item_title">ایمیل:</span>
                <span className="profileAccount_item_text">aaaaaaaa@gmail.com</span>
            </li>
            <li className="profileAccount_item">
                <span className="profileAccount_item_title">تاریخ عضویت:</span>
                <span className="profileAccount_item_text">1402/12/01</span>
            </li>
            <li className="profileAccount_item">
                <span className="profileAccount_item_title">کدملی:</span>
                <span className="profileAccount_item_text">0888888888</span>
            </li>
        </ul>
    </div>
   </section>
  )
}

export default ProfileAccount