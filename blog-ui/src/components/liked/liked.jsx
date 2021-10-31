import Banner from "../banner/banner";
import {NavLink} from "react-router-dom";
import '../static/liked.scss'

const Liked = () => {
    return (
        <div>
            <Banner />
            <h2 style={{marginTop: '2rem', textAlign: 'center'}}>Понравившиеся посты</h2>
            <div className="container">
                <div className="row row-cols-4">
                    <div className="col">
                        <div className="card" style={{ width: '18rem', marginTop: '6rem' }}>
                            <img src="https://via.placeholder.com/350x250" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <NavLink to="post/1" className="btn btn-primary">Подробнее</NavLink>
                                <i className="far fa-heart active" style={{float: 'right'}}></i>
                            </div>
                        </div>
                    </div><div className="col">
                        <div className="card" style={{ width: '18rem', marginTop: '6rem' }}>
                            <img src="https://via.placeholder.com/350x250" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <NavLink to="post/1" className="btn btn-primary">Подробнее</NavLink>
                                <i className="far fa-heart active" style={{float: 'right'}}></i>
                            </div>
                        </div>
                    </div><div className="col">
                        <div className="card" style={{ width: '18rem', marginTop: '6rem' }}>
                            <img src="https://via.placeholder.com/350x250" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <NavLink to="post/1" className="btn btn-primary">Подробнее</NavLink>
                                <i className="far fa-heart active" style={{float: 'right'}}></i>
                            </div>
                        </div>
                    </div><div className="col">
                        <div className="card" style={{ width: '18rem', marginTop: '6rem' }}>
                            <img src="https://via.placeholder.com/350x250" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <NavLink to="post/1" className="btn btn-primary">Подробнее</NavLink>
                                <i className="far fa-heart active" style={{float: 'right'}}></i>
                            </div>
                        </div>
                    </div><div className="col">
                        <div className="card" style={{ width: '18rem', marginTop: '6rem' }}>
                            <img src="https://via.placeholder.com/350x250" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <NavLink to="post/1" className="btn btn-primary">Подробнее</NavLink>
                                <i className="far fa-heart active" style={{float: 'right'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Liked