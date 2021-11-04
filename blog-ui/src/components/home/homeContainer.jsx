import Home from "./home";
import {connect} from "react-redux";
import {getCategoryTC, getPostByIdTC, getPostTC} from "../../store/reducers/postReducer";
import {useEffect} from "react";
import {likePostTC} from "../../store/reducers/authReducer";

const HomeContainer = props => {
    useEffect(() => {
        props.getPostTC()
        props.getCategoryTC()
    }, [])
    return (
        <div>
            <Home
                category={props.category}
                posts={props.posts}
                getPost={props.getPostTC}
                getPostById={props.getPostByIdTC}
                likePost={props.likePostTC}
                auth={props.auth}
                token={props.token}
            />
        </div>
    )
}

let mapStateToProps = state => ({
    posts: state.post.posts,
    category: state.post.categories,
    auth: state.auth.data,
    token: state.auth.token
})

export const HomeConnected = connect(mapStateToProps,
    {getPostTC, getCategoryTC, getPostByIdTC, likePostTC})(HomeContainer)
