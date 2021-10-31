import image1 from '../static/img/image1.png'
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup'

const Banner = () => {
    const initialValues = {
        inputText: ''
    }
    const validationSchema = Yup.object({
        inputText: ''
    })
    const onSubmit = values => {
        console.log(values)
    }
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__title"><p>
                    ЗДРАСТВУЙ! <br/> Я напишу вам, <br/> обо всем что знаю!
                </p>
                    <div>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {
                                formik => {
                                    return <Form>
                                        <Field component="input" name="inputText" type="text" id="search-bar" placeholder="Найти пост" />
                                        <button type="submit" className="formik__button">
                                            <a href="#">
                                                <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
                                            </a>
                                        </button>
                                    </Form>
                                }
                            }
                        </Formik>
                    </div>
                </div>
                <div className="banner__image">
                    <img src={image1} alt="Здесь крутая пикча!"/>
                </div>
            </div>
        </section>
    )
}

export default Banner