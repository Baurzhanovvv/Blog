import '../static/home.scss'
import {NavLink} from "react-router-dom";
import Banner from "../banner/banner";


const Home = () => {
    const onChange = values => {
        if (values.target.checked) {
            console.log(values.target.defaultValue)
        }

    }
    return (
        <div>
            <Banner />
            <section className="posts">
                <div className="container">
                    <h2 style={{ marginTop: '4rem', textAlign: 'center' }}>Лучшие посты!</h2>
                    <div className="row row-cols-4">
                        <div className="col">
                            <div className="categories" style={{float: 'right', marginTop: '6rem'}}>
                                <h2>Категорий</h2>
                                <input type="checkbox" name="category" value="Здоровье" onChange={onChange}/>
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