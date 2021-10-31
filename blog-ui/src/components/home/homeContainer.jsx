import Home from "./home";
import {connect} from "react-redux";
import {getCategoryTC, getPostTC} from "../../store/reducers/postReducer";
import {useEffect} from "react";

const HomeContainer = props => {
    useEffect(() => {
        props.getPostTC()
        props.getCategoryTC()
    }, [])
    return (
        <div>
            <Home category={props.category} post={props.post} getPost={props.getPostTC} />
        </div>
    )
}

let mapStateToProps = state => ({
    post: state.post.posts,
    category: state.post.categories,
})

export const HomeConnected = connect(mapStateToProps, {getPostTC, getCategoryTC})(HomeContainer)
