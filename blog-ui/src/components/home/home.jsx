import '../static/home.scss'
import {NavLink} from "react-router-dom";
import Banner from "../banner/banner";


const Home = props => {
    const onChange = values => {
        if (values.target.checked) {
            let id = Number(values.target.defaultValue)
            props.getPost(null, id)
        }

    }
    return (
        <div>
            <Banner getPost={props.getPost} />
            <section className="posts">
                <div className="container">
                    <h2 style={{ marginTop: '4rem', textAlign: 'center' }}>Лучшие посты!</h2>
                    <div className="row row-cols-4">
                        <div className="col">
                            <div className="categories" style={{float: 'right', marginTop: '6rem'}}>
                                <h2>Категорий</h2>
                                {props.category.map(c =>
                                    <div>
                                        <input type="checkbox" name="category" value={c.id} onChange={onChange}/>
                                        <label htmlFor="category" style={{ textIndent: '4px' }}>{c.title}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                            {props.posts.map(p =>
                            <div className="col">
                                <div className="card" style={{ width: '18rem', marginTop: '6rem' }}>
                                    <img src={p.gallery.photos[0].photo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.title}</h5>
                                        <NavLink to={`post/${p.id}`} onClick={() => props.getPostById(p.id)}
                                                 className="btn btn-primary">Подробнее</NavLink>
                                        <i
                                            onClick={() =>
                                                props.likePost(
                                                    p.id,
                                                    props.auth,
                                                    props.token,
                                                )}
                                            className="far fa-heart" style={{float: 'right'}}></i>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home