import {createUserTC, logUserTC} from "../../store/reducers/authReducer";
import Login from "./login";
import {connect} from "react-redux";

const LoginContainer = props => {
    return (
        <div>
            <Login createUser={props.createUserTC} auth={props.auth} logUser={props.logUserTC}/>
        </div>
    )
}

let mapStateToProps = state => ({
    auth: state.auth
})

export const LoginConnected = connect(mapStateToProps, {createUserTC, logUserTC})(LoginContainer)
