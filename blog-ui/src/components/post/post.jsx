import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import { Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import '../static/post.scss'
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup'

export const Post = () => {
    const initialValues = {
        commentText: ''
    }
    const validationSchema = Yup.object({
        commentText: ''
    })
    const onSubmit = values => {
        console.log(values)
    }
    return (
        <div>
            <div className="container">
                <h2 style={{textAlign: 'center', paddingTop: '2rem', marginBottom: '4rem'}}>Title</h2>
                <Swiper
                    className="swiper"
                    modules={[Navigation, Pagination ]}
                    spaceBetween={150}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img src="https://via.placeholder.com/350x350" className="swiper__image" alt=""/></SwiperSlide>
                    <SwiperSlide><img src="https://via.placeholder.com/450x350" className="swiper__image" alt=""/></SwiperSlide>
                    <SwiperSlide><img src="https://via.placeholder.com/550x350" className="swiper__image" alt=""/></SwiperSlide>
                    <SwiperSlide><img src="https://via.placeholder.com/150x350" className="swiper__image" alt=""/></SwiperSlide>
                </Swiper><hr/>
                <p>
                    Desc
                </p> <hr/>
                <h4>Оставить комментарий</h4>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => {
                            return <Form>
                                <Field name="commentText" component="textarea" placeholder="Напишите ваш уникальный комментарии" cols={175} rows={15}/>
                                <br/>
                                <button type="submit" className="btn btn-success">Отправить</button>
                            </Form>
                        }
                    }
                </Formik>
            </div>
        </div>)
};