import Home from "./home";
import {connect} from "react-redux";
import {getCategoryTC, getPostByIdTC, getPostTC} from "../../store/reducers/postReducer";
import {useEffect} from "react";

const HomeContainer = props => {
    useEffect(() => {
        props.getPostTC()
        props.getCategoryTC()
    }, [])
    return (
        <div>
            <Home category={props.category} posts={props.posts} getPost={props.getPostTC} getPostById={props.getPostByIdTC} />
        </div>
    )
}

let mapStateToProps = state => ({
    posts: state.post.posts,
    category: state.post.categories,
})

export const HomeConnected = connect(mapStateToProps, {getPostTC, getCategoryTC, getPostByIdTC})(HomeContainer)
