import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const SignupForm = (props) => {
    const initialValues = {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
    }
    const validationSchema = Yup.object({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: Yup.string().required('Invalid password'),
    })
    const onSubmit = values => {
        console.log(values);
        // props.createUser(values)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
                            <div className="form-floating mb-3">
                                <Field component="input" type="text" name="username" className="form-control" id="floatingInputUsername" placeholder="Username" required autoFocus />
                                <label htmlFor="floatingInputUsername">Username</label>
                            </div>
                            <hr />
                            <div className="form-floating mb-3">
                                <Field component="input" type="text" name="first_name" className="form-control" id="floatingPassword" placeholder="First name" />
                                <label htmlFor="floatingPassword">First name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field type="text" name="last_name" className="form-control" id="floatingPasswordConfirm" placeholder="Last name" />
                                <label htmlFor="floatingPasswordConfirm">Last name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field type="email" name="email" className="form-control" id="floatingPasswordConfirm" placeholder="Email" />
                                <label htmlFor="floatingPasswordConfirm">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field type="tel" name="phone" className="form-control" id="floatingPasswordConfirm" placeholder="Your mobile phone" />
                                <label htmlFor="floatingPasswordConfirm">Your mobile phone</label>
                            </div>
                            <div className="form-floating mb-3">
                                <Field type="password" name="password" className="form-control" id="floatingPasswordConfirm" placeholder="password" />
                                <label htmlFor="floatingPasswordConfirm">Password</label>
                            </div>
                            <div className="d-grid mb-2">
                                <button className={`btn btn-lg btn-primary fw-bold text-uppercase`} type="submit" disabled={!formik.isValid}>
                                    Sign up
                                </button><hr />
                                <NavLink className="text-center" to="/login">If you have an account</NavLink>
                            </div>
                        </div>
                    </Form>
                }
            }
        </Formik>
    )
};


const SigninForm = (props) => {
    const initialValues = {
        username: '',
        password: '',
    }
    const validationSchema = Yup.object({
        username: '',
        password: Yup.string().required('Invalid password'),
    })
    const onSubmit = values => {
        console.log(values)
        // props.loginUser(values)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
                            <div className="form-floating mb-3">
                                <Field component="input" type="text" name="username" className="form-control" id="floatingInputUsername" placeholder="Username" required autoFocus />
                                <label htmlFor="floatingInputUsername">Username</label>
                            </div>
                            <hr />
                            <div className="form-floating mb-3">
                                <Field type="password" name="password" className="form-control" id="floatingPasswordConfirm" placeholder="password" />
                                <label htmlFor="floatingPasswordConfirm">Password</label>
                            </div>
                            <div className="d-grid mb-2">
                                <button className={`btn btn-lg btn-primary fw-bold text-uppercase`} type="submit" disabled={!formik.isValid}>
                                    Sign in
                                </button><hr />
                                <NavLink className="text-center" to="/register">If you do not have an account</NavLink>
                            </div>
                        </div>
                    </Form>
                }
            }
        </Formik>
    )
};

const Login = (props) => {
    const location = useLocation()
    return (
        <div>
            {location.pathname === '/login' ? <SigninForm /> : <SignupForm />}
        </div>
    );
}

export default Login