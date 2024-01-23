import './RegisterForm.css';
import { Formik } from 'formik';

function RegisterForm() {
  return (
    <section className="register">
        <div className="containers">
                <div className="register_wrapper">
                    <Formik
                        initialValues={{email:"", user:"" , password:"" , phone:""}}
                        validate={(values)=>{
                            const errors = {};

                            if(values.email === ''){
                                errors.email = 'مقدار ایمیل اجباری است'
                            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                                errors.email = 'ایمیل وارد شد معتبر نیست'
                            }

                            if(values.phone === ''){
                                errors.phone = 'مقدار تلفن اجباری است'
                            }
            
                            if(values.user === ''){
                                errors.user = 'مقدار نام کاربری اجباری است '
                            } else if(values.user.length < 4){
                                errors.user = 'حداقل باید 4حروف داشته باشد'
                            }
            
                            if(values.password === ''){
                                errors.password = 'مقدار رمز اجباری است'
                            } else if(values.password.length < 8 ){
                                errors.password = "حداقل باید 8 کارکتر داشته باشد"
                            }


                            return errors
                        }}
                        onSubmit={(values)=>{
                            console.log(values);
                        }}
                    >

                        {({
                             values,
                             handleChange,
                             handleSubmit,
                             handleBlur,
                             errors,
                             touched
                        })=>(
                                <form action="#" className="Form" onSubmit={handleSubmit}>
                                <img src="/assets/images/logo.png" alt="" className="Form_logo" />
                                <h5 className="form_title">ثبت نام</h5>
                                <div className="formBox">
                                    <label htmlFor="" className='formBox_text'> ایمیل</label>
                                    <input
                                     type="email"
                                     name='email'
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.email}
                                     className='formBox_input' />
                                     {errors.email && touched.email && (<span className='formBox_inputError'>{errors.email}</span>)}
                                </div>
                                <div className="formBox">
                                    <label htmlFor="" className='formBox_text'> شماره تلفن</label>
                                    <input
                                     type="phone"
                                     name='phone'
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     value={values.phone}
                                     className='formBox_input' />
                                     {errors.phone && touched.phone && (<span className='formBox_inputError'>{errors.phone}</span>)}
                                </div>
                                <div className="formBox">
                                    <label htmlFor="" className='formBox_text'>  نام کاربری</label>
                                    <input 
                                    type="user" 
                                    name='user'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.user}
                                    className='formBox_input' />
                                    {errors.user && touched.user && (<span className='formBox_inputError'>{errors.user}</span>)}
                                </div>
                                <div className="formBox">
                                    <label htmlFor="" className='formBox_text'>رمزعبور</label>
                                    <input 
                                    type="password" 
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className='formBox_input' />
                                    {errors.password && touched.password && (<span className='formBox_inputError'>{errors.password}</span>)}
                                </div>
                                <button className="form_submit">ورود</button>
                </form>
                        )}
                    </Formik>
                </div>
        </div>
    </section>
  )
}

export default RegisterForm