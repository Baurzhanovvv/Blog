import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import { Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import '../static/post.scss'


export const Post = () => {
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
                <textarea placeholder="Напишите ваш уникальный комментарии" cols={175} rows={15}/><br/>
                <button className="btn btn-success">Отправить</button>
            </div>
        </div>
    )
};