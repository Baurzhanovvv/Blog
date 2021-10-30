import image1 from '../static/img/image1.png'
import '../static/home.scss'
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <section className="banner">
                <div className="container">
                    <div className="banner__title"><p>
                        ЗДРАСТВУЙ! <br/> Я напишу вам, <br/> обо всем что знаю!
                    </p>
                        <input type="text" id="search-bar" placeholder="Найти пост" />
                            <a href="#">
                                <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
                            </a>
                        </div>
                    <div className="banner__image">
                        <img src={image1} alt="Здесь крутая пикча!"/>
                    </div>
                </div>
            </section>
            <section className="posts">
                <div className="container">
                    <h2 style={{ marginTop: '4rem', textAlign: 'center' }}>Лучшие посты!</h2>
                    <div className="row row-cols-4">
                        <div className="col">
                            <div className="categories" style={{float: 'right', marginTop: '6rem'}}>
                                <h2>Категорий</h2>
                                <input type="checkbox" name="category"/>
                                <label htmlFor="category" style={{ textIndent: '4px' }}>Здоровье</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: '18rem', marginTop: '6rem' }}>
                                <img src="https://via.placeholder.com/350x250" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                    <NavLink to="post/1" className="btn btn-primary">Подробнее</NavLink>
                                    <i className="far fa-heart" style={{float: 'right'}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home