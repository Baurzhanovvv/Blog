import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import { Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import '../static/post.scss'
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";

export const Post = props => {
    let posts = props.post.gallery.photos
    const initialValues = {
        commentText: ''
    }
    const validationSchema = Yup.object({
        commentText: ''
    })
    const onSubmit = values => {
        props.postComment(values.commentText, props.auth.data.id, props.auth.token, props.post.id, props.post.comment)
    }
    return (
        <div>
            <div className="container">
                <h2 style={{textAlign: 'center', paddingTop: '2rem', marginBottom: '4rem'}}>{props.post.title}</h2>
                <Swiper
                    className="swiper"
                    modules={[Navigation, Pagination ]}
                    spaceBetween={150}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {posts.map(p =>
                        <SwiperSlide>
                            <img src={p.photo} className="swiper__image" alt=""/>
                        </SwiperSlide>
                    )}
                </Swiper><hr/>
                <p>
                    {props.post.text}
                </p><hr/>
                <h4>Оставить комментарий</h4>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => {
                            return <Form>
                                <Field name="commentText" component="textarea" placeholder="Напишите ваш уникальный комментарии" cols={175} rows={15}/>
                                <br/>
                                {props.auth.data.length === 0 ?
                                <Popup
                                    trigger={<button type="submit" className="btn btn-success">Отправить</button>}
                                    position={"top center"}
                                >
                                    <div>ЗАРЕГИСТРИРОВАТЬСЯ</div>
                                </Popup>
                                    :
                                    <button type="submit" className="btn btn-success">Отправить</button>}
                            </Form>
                        }
                    }
                </Formik>
                <h3>
                    Комменты ({props.post.comment.length})
                </h3>
                {props.post.comment.map(r =>
                    <div>
                        <div className="mt-4" id="comment">
                            <h6>{r.profile.id}</h6>
                            <p>{r.text}</p>
                        </div><br/>
                    </div>
                    )}
            </div>
        </div>)
};