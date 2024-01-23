import './OrderAccount.css';

function OrderAccount() {
  return (
   <section className="orderAccount">
    <div className="orderAccount_wrapper">
    <h6 className="account_title">لیست سفارشات</h6>
        <table className="orderAccount_table">
            <thead className="orderAccount_thead">
                <tr className="orderAccount_tr">
                    <th className="orderAccount_th">
                        <span className="orderAccount_th_text">شماره سفارش</span>
                    </th>
                    <th className="orderAccount_th">
                        <span className="orderAccount_th_text">تاریخ ثبت سفارش</span>
                    </th>
                    <th className="orderAccount_th">
                        <span className="orderAccount_th_text">	وضعیت</span>
                    </th>
                    <th className="orderAccount_th">
                        <span className="orderAccount_th_text">	مجموع</span>
                    </th>
                    <th className="orderAccount_th">
                        <span className="orderAccount_th_text">	جزئیات</span>
                    </th>
                </tr>
            </thead>
            <tbody className="orderAccount_tbody">
                <tr className="orderAccount_tbody_tr">
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">G45266TY45H</span>
                    </td>
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">	1402/12/05</span>
                    </td>
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">پرداخت شده</span>
                    </td>
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">	17,500,000 تومان</span>
                    </td>
                    <td className="orderAccount_td">
                        <button className="orderAccount_td_btnDetails">مشاهده</button>
                    </td>
                </tr>
                <tr className="orderAccount_tbody_tr">
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">G45266TY45H</span>
                    </td>
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">	1402/12/05</span>
                    </td>
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">پرداخت شده</span>
                    </td>
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">	17,500,000 تومان</span>
                    </td>
                    <td className="orderAccount_td">
                        <button className="orderAccount_td_btnDetails">مشاهده</button>
                    </td>
                </tr>
                <tr className="orderAccount_tbody_tr">
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">G45266TY45H</span>
                    </td>
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">	1402/12/05</span>
                    </td>
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">پرداخت شده</span>
                    </td>
                    <td className="orderAccount_td">
                        <span className="orderAccount_td_text">	17,500,000 تومان</span>
                    </td>
                    <td className="orderAccount_td">
                        <button className="orderAccount_td_btnDetails">مشاهده</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
   </section>
  )
}

export default OrderAccount