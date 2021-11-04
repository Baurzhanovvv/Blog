import {Post} from "./post";
import {connect} from "react-redux";
import {createCommentTC, getPostByIdTC} from "../../store/reducers/postReducer";
import {useHistory} from "react-router";

const PostContainer = props => {
    const id = useHistory().location.pathname[6]
    const getPost = () => {
        props.getPostByIdTC(id)
    }
    return (
        <div>
            {props.post.length === 0 ? getPost() :
                <Post post={props.post}
                      auth={props.auth}
                      postComment={props.createCommentTC}
                />}
        </div>
    )
}

let mapStateToProps = state => ({
    post: state.post.post,
    auth: state.auth
})

export const PostConnected = connect(mapStateToProps,
    {getPostByIdTC, createCommentTC})(PostContainer)
