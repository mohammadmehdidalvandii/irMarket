import "./LoginForm.css";
import { Formik } from "formik";

function LoginForm() {
  return (
    <section className="login">
      <div className="containers">
        <div className="login_wrapper">
          <Formik
            initialValues={{email:"", password:""}}
            validate={(values)=>{
              const errors = {};
              if(values.email === ''){
                errors.email = "مقدار نام ایمیل اجباری هست"
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
              errors.email = 'ایمیل وارد شد معتبر نیست'
          }

            if(values.password === ''){
                errors.password = "مقدار گذرواژه اجباری است"
              } else if(values.password.length <  8){
                errors.password = 'مقدار حروف یا اعداد با 8 باشد'
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
               <h5 className="form_title">ورود</h5>
               <div className="formBox">
                 <label htmlFor="" className="formBox_text">
                     ایمیل
                 </label>
                 <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="formBox_input" />
                  {errors.email && touched.email && (<span className="formBox_inputError">{errors.email}</span>)}
               </div>
               <div className="formBox">
                 <label htmlFor="" className="formBox_text">
                   رمزعبور
                 </label>
                 <input
                  type="password"
                    name="password" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="formBox_input" />
                  {errors.email && touched.password && (<span className="formBox_inputError">{errors.password}</span>)}
               </div>
               <button className="form_submit">ورود</button>
             </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
